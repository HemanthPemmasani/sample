const details = {
    elgibility: "",
    upload: "",
    include: "",
    exclude: "",
    participate: "",
    screenFailureReason: ""
}

let exclude = document.getElementById("exclude");
let include = document.getElementById("include");
let elgibilityY = document.getElementById("elg-yes");
let elgibilityN = document.getElementById("elg-no");
let reason = document.getElementById("reason-failure");
let participateYes = document.getElementById("par-yes");
let participateNo = document.getElementById("par-no");
let lockIcon = document.getElementById("lock");


function handleElgibilityChange(event) {
    details.elgibility = event.target.value;
    if (details.elgibility === "yes") {
        include.style.pointerEvents = 'none';
        exclude.style.pointerEvents = 'none';
    } else {
        include.style.pointerEvents = 'auto';
        exclude.style.pointerEvents = 'auto';
    }
}

function handleElgibilityNo(event){
    details.elgibility=event.target.value
    if(details.elgibility==="no"){
        include.style.pointerEvents = 'auto';
        exclude.style.pointerEvents = 'auto';
    }
}
elgibilityY.addEventListener("change", handleElgibilityChange);
elgibilityN.addEventListener("change", handleElgibilityNo);

participateYes.addEventListener("change",function(e){
    details.participate=e.target.value
     reason.style.pointerEvents = details.participate === "yes" ? 'none' : 'auto';
})

participateNo.addEventListener("change",function(e){
    details.participate=e.target.value
     reason.style.pointerEvents = details.participate === "no" ? 'auto' : 'none';
})
  
reason.addEventListener("change",function(e){
    details.screenFailureReason=e.target.value
})


function uploadFile() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    fileInput.click();

    fileInput.addEventListener('change', function () {
        const files = fileInput.files;
        details.upload = files;
        document.body.removeChild(fileInput);
    });
}


function toggleLockIcon() {
    lockIcon.classList.toggle("fa-lock");
    lockIcon.classList.toggle("fa-unlock");
}


let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (e) {
   
   
});
