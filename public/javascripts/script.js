const BG_ARR = ['link', 'primary', 'info', 'danger', 'warning', 'success'];
setTimeout(() => {
  let doc = document.getElementById('app');
  console.log(doc.classList, 'doc');
  let replaceDoc = doc.className.replace('is-', '');
  console.log(replaceDoc, 'replaceDoc');
})
