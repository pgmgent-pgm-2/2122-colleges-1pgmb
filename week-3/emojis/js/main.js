const emojisListElement = document.getElementById('emojis-list');
const tooltip = document.getElementById('tooltip');

const handleMouseEnter = (description, height) => {
    tooltip.innerHTML = description;
    tooltip.style.top = `${height + 10}px`;
}

const addEventListenersOnList = () => {
    const listItems = document.querySelectorAll('.list-item');

    listItems.forEach(listItem => {
        listItem.addEventListener('mouseenter', (e) => {
            handleMouseEnter(listItem.getAttribute('data-description'), e.clientY);
        });
    })
}

const renderEmojiItem = (emoji) => {
    return `<li class="list-item" data-description='${emoji.keywords}'>
    ${emoji.symbol}
    ${emoji.title}
    </li>`;
}

const renderEmojiList = (emojis) => {
    emojisListElement.innerHTML = emojis.map(emoji => {
        return renderEmojiItem(emoji);
    }).join('<hr>');
}

const getEmoji = async () => {
    const emojis = await getData('/data/emojis.json');
    renderEmojiList(emojis);
    addEventListenersOnList();
}

getEmoji();