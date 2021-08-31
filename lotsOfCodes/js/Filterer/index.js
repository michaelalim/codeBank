const allRadio = document.querySelectorAll('input[type=radio]');
const objArr = [
  {
    name: 'john',
    category: 'hard',
    resource: 'scrimba'
  },
  {
    name: 'kiki',
    category: 'medium',
    resource: 'scrimba'
  },
  {
    name: 'john',
    category: 'hard',
    resource: 'others'
  },
  {
    name: 'paul',
    category: 'easy',
    resource: 'others'
  },
  {
    name: 'james',
    category: 'medium',
    resource: 'others'
  },
  {
    name: 'paston',
    category: 'easy',
    resource: 'scrimba'
  }]

function filterThings() {
  const level = document.querySelector('.levels-container input[type=radio]:checked').value;
  const resource = document.querySelector('.res-container input[type=radio]:checked').value;
  const isAllRes = document.querySelector('.is_all_res').checked;
  const isAllLevel = document.querySelector('.is_all_level').checked;

  
  const filteredArr = objArr.filter((obj, index, arr) => {
    const isAll = (isAllRes && isAllLevel);
    if (isAll) {
      return arr;
    }
    else if (isAllRes && obj.category == level) {
      return (obj.category == level)
    }
    else if (isAllLevel && obj.resource == resource) {
      return (obj.resource == resource)
    }
    else if (obj.category == level && obj.resource == resource) {
      return (obj.category == level && obj.resource == resource)

    }

  })




  console.log(filteredArr); 
}


allRadio.forEach((radio) => {

  radio.addEventListener('click', filterThings, false)
})

