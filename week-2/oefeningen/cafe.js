const listEl = document.querySelector('#list');

const renderListItem = (name) => {
    return `<li>${name}</li>`;
};

const renderBarsToHTML = (bars) => {
    listEl.innerHTML = bars.map(({fields: {name_es}}) => {
        return renderListItem(name_es);
    }).join('<hr>');
}

fetch('https://data.stad.gent/api/records/1.0/search/?dataset=cafes-gent&q=')
.then(res => res.json())
.then(({records: bars}) => {
    renderBarsToHTML(bars);
})
.catch(err => {
    alert(err);
});