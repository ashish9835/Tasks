let fetchData = document.getElementById('fetchData');
fetchData.addEventListener('click', popData);

function popData(){
  console.log('About to fetch data');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

  xhr.onload = function() {
    if(this.status === 200){
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      str="";
      let list = document.getElementById('list');
      // for (const key in obj.data) {
      //   console.log(key);
      //   // str += ` <li> ${obj[key].first_name && obj[key].last_name} </li> `
      // }
      for (let index = 0; index < obj.data.length; index++) {
        console.log(obj.data[index]);
        str += `<li> ${obj.data[index].first_name} ${ obj.data[index].last_name} </li> `;
        console.log(str);
      }
      list.innerHTML = str;
    }
    else{
      console.log("Some error occured");
    }
  }

  xhr.send();
}

function openData(){
    alert("Hello");
}