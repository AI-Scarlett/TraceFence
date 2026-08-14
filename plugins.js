const pluginCatalogState = { plugins: [], category: "", query: "" };

function pluginLanguage() {
  return document.documentElement.dataset.lang === "zh" ? "zh" : "en";
}

function pluginCopy(en, zh) {
  return pluginLanguage() === "zh" ? zh : en;
}

function localizedPlugin(plugin) {
  const locale = pluginLanguage() === "zh" ? "zh-Hans" : "en";
  const localized = plugin.localizedMetadata && plugin.localizedMetadata[locale];
  return {
    name: localized && localized.displayName ? localized.displayName : plugin.name,
    summary: localized && localized.summary ? localized.summary : plugin.summary,
  };
}

function addText(parent, className, value) {
  const element = document.createElement("div");
  element.className = className;
  element.textContent = value;
  parent.appendChild(element);
  return element;
}

function renderPluginCatalog() {
  const grid = document.getElementById("plugin-grid");
  const status = document.getElementById("plugin-status");
  if (!grid || !status) return;

  const query = pluginCatalogState.query.trim().toLocaleLowerCase();
  const visible = pluginCatalogState.plugins.filter((plugin) => {
    const copy = localizedPlugin(plugin);
    const matchesCategory = !pluginCatalogState.category || plugin.category === pluginCatalogState.category;
    const haystack = `${copy.name} ${copy.summary} ${plugin.category}`.toLocaleLowerCase();
    return matchesCategory && (!query || haystack.includes(query));
  });

  status.textContent = pluginCopy(
    `${visible.length} of ${pluginCatalogState.plugins.length} independently versioned plugins`,
    `共 ${pluginCatalogState.plugins.length} 个独立版本插件，当前显示 ${visible.length} 个`
  );
  grid.replaceChildren();

  visible.forEach((plugin) => {
    const copy = localizedPlugin(plugin);
    const card = document.createElement("article");
    card.className = "plugin-card";

    const top = document.createElement("div");
    top.className = "plugin-card-top";
    addText(top, "plugin-name", copy.name);
    addText(top, "plugin-version", `v${plugin.version}`);
    card.appendChild(top);
    addText(card, "plugin-summary", copy.summary);

    const metadata = document.createElement("div");
    metadata.className = "plugin-metadata";
    addText(metadata, "pill", plugin.category);
    addText(metadata, "pill", `macOS ${plugin.minimumSystemVersion}+`);
    const permissionCount = Array.isArray(plugin.permissions) ? plugin.permissions.length : 0;
    addText(metadata, "pill", pluginCopy(`${permissionCount} permissions`, `${permissionCount} 项权限`));
    card.appendChild(metadata);

    const access = document.createElement("div");
    access.className = "plugin-access";
    access.textContent = plugin.isFree
      ? pluginCopy("Free", "免费")
      : pluginCopy("Included with TraceFence Standard", "TraceFence Standard 权益内可用");
    card.appendChild(access);
    grid.appendChild(card);
  });

  if (!visible.length) {
    addText(grid, "catalog-empty", pluginCopy("No plugins match these filters.", "没有符合当前筛选条件的插件。"));
  }
}

async function initPluginCatalog() {
  const search = document.getElementById("plugin-search");
  const category = document.getElementById("plugin-category");
  try {
    const response = await fetch("catalog/storefront-v1.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const catalog = await response.json();
    pluginCatalogState.plugins = catalog.plugins.filter((plugin) => plugin.delivery === "package");

    [...new Set(pluginCatalogState.plugins.map((plugin) => plugin.category))]
      .sort((left, right) => left.localeCompare(right))
      .forEach((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        category.appendChild(option);
      });
    renderPluginCatalog();
  } catch (error) {
    document.getElementById("plugin-status").textContent = pluginCopy(
      "The plugin catalog is temporarily unavailable.",
      "插件目录暂时无法载入。"
    );
  }

  search.addEventListener("input", () => {
    pluginCatalogState.query = search.value;
    renderPluginCatalog();
  });
  category.addEventListener("change", () => {
    pluginCatalogState.category = category.value;
    renderPluginCatalog();
  });
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => {
      search.placeholder = pluginCopy("Search plugins", "搜索插件");
      category.options[0].textContent = pluginCopy("All categories", "全部分类");
      renderPluginCatalog();
    });
  });
  search.placeholder = pluginCopy("Search plugins", "搜索插件");
  category.options[0].textContent = pluginCopy("All categories", "全部分类");
}

document.addEventListener("DOMContentLoaded", initPluginCatalog);
