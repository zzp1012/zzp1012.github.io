document.querySelectorAll('.works-filter').forEach((filter) => {
  const list = document.getElementById(filter.dataset.list);
  const previewCount = Number(list.dataset.previewCount);
  const olderRows = Array.from(list.tBodies[0].rows).slice(previewCount);
  const buttons = filter.querySelectorAll('button');

  if (olderRows.length === 0) return;

  const update = (mode) => {
    olderRows.forEach((row) => {
      row.hidden = mode === 'selected';
    });
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
    });
  };

  update('selected');
  filter.hidden = false;
  buttons.forEach((button) => {
    button.addEventListener('click', () => update(button.dataset.mode));
  });
});
