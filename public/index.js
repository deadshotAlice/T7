const resourceList = document.getElementById('resource-list');
const statusText = document.getElementById('status');

function createResourceCard(resource) {
  const card = document.createElement('article');
  card.className = 'resource-card';

  const category = document.createElement('span');
  category.className = 'resource-card__category';
  category.textContent = resource.category;

  const title = document.createElement('h3');
  title.textContent = resource.title;

  const description = document.createElement('p');
  description.textContent = resource.description;

  const link = document.createElement('a');
  link.href = resource.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = '访问资源 →';

  card.append(category, title, description, link);
  return card;
}

async function loadResources() {
  try {
    const response=await fetch('/api/resources');
    const result=await response.json();
    const resources=result.data;
    resourceList.innerHTML='';
    resources.forEach((resource) => {
      resourceList.append(createResourceCard(resource));
    });
    statusText.textContent=`共加载${resources.length}条信息`;

  } catch (error) {
    console.error('加载资源失败：', error);
    statusText.textContent = '资源加载失败';
    statusText.classList.add('error');
  }
}

loadResources();
