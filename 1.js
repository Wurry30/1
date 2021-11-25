let myButton = document.getElementById("sqn");
let qn = document.getElementById('qn');
let faq = document.getElementById('cars');
let answer = document.getElementById('ans');

function changeTitle() {    
  console.log('Submit');
  answer.value = 'Question submitted';
  const tmp = String(Date.now());
  console.log(tmp);

  const http = new XMLHttpRequest();
  const pass = 'adminkey:aWNzLWJpZy1jdXN0b21lci04ZjQwYTRlZS00YzM5LTQzZTItOTEzNi03NThjODQxYjlhNTktMTYzNzc2MzA4MTkzNA==,adminsecret:8c0fa1dfc252c6782440550dd86637bb,customerId:8f40a4ee-4c39-43e2-9136-758c841b9a59,nonce:123,robotsecret:96ec43ebf97f5a331b2345749d4a348b,timestamp:'+tmp+',uri:/v1/openapi/tenants/30978/robots/43f6ac12-4f0c-48e5-8f66-5345a5c836ce/robot/ask';
  var passhash = CryptoJS.MD5(pass).toString();
  console.log(passhash);
  const url = 'https://bot.4paradigm.com/v1/openapi/tenants/30978/robots/43f6ac12-4f0c-48e5-8f66-5345a5c836ce/robot/ask?adminkey=aWNzLWJpZy1jdXN0b21lci04ZjQwYTRlZS00YzM5LTQzZTItOTEzNi03NThjODQxYjlhNTktMTYzNzc2MzA4MTkzNA==&customerId=8f40a4ee-4c39-43e2-9136-758c841b9a59&nonce=123&'+'timestamp='+tmp+'&sign='+passhash;
  http.open('POST', url);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify({"userId":"myUserId",
      "question":qn.value,
      "channel":"API",
      "questionType":"TEXT"
}));
  
  http.onreadystatechange = () => {
      if (http.readyState == 4 && http.status == 200) {
          console.log(http.responseText);
          let a = JSON.parse(http.responseText);
          answer.value = a.data.answer;
      }
  }
  //document.title = 'New Title';
}

myButton.onclick = function() {
  changeTitle();
}

faq.onchange = function(){
	qn.value = faq.value;
}
