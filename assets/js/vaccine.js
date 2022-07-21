//API REQUEST
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '-' + mm + '-' + yyyy;
const submitBtn = document.getElementById("submit");
const mainSection = document.getElementById("mainHome");
const tableSec = document.getElementById("vaccine-data");
const myTable = document.getElementById("myTable");
const tableBody = document.getElementById("tbody");
submitBtn.addEventListener("click", () => {
    var pincode = document.getElementById("pincode").value;
    if (pincode.length == 6) {
        const xhrReq = new XMLHttpRequest();
        xhrReq.open("get", "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=" + pincode + "&date=" + today);
        xhrReq.onload = () => {
            if (xhrReq.responseText != '{"centers":[]}') {
                var jsonData = JSON.parse(xhrReq.responseText)
                let centers = jsonData["centers"];
                for (let i = 0; i < centers.length; i++) {
                    let sessions = jsonData["centers"][i]["sessions"];
                    for (let z = 0; z < sessions.length; z++) {
                        var available_capacity = ""
                        if (sessions[z]['available_capacity'] == '0') {
                            available_capacity = "<span class='btn btn-danger'>0 (All Booked)</span>";
                        } else {
                            available_capacity = '<a class="btn btn-success" href="https://www.cowin.gov.in/home" title="Click to register" target="_blank" rel="noopener noreferrer">&nbsp' + sessions[z]['available_capacity'] + "</a>"
                        }

                        var htmlData = "<tr> <td>" + sessions[z]['date'] + "</td> <td>" + jsonData["centers"][i]['name'] + "</td> <td>" + available_capacity + "</td> <td>" + sessions[z]['vaccine'] + "</td> <td>" + sessions[z]['min_age_limit'] + "</td> <td>" + jsonData["centers"][i]['fee_type'] + "</td> </tr>";
                        mainSection.classList.add("d-none");
                        mainSection.classList.remove("d-flex");
                        tableSec.classList.remove("d-none");
                        var newRow = tableBody.insertRow(tableBody.rows.length);
                        newRow.innerHTML = htmlData;
                    }

                }
            } else {
                Swal.fire(
                    'Not Found!',
                    'No Vaccination center is available for this Zip Code. Please search for a new Zip Code!',
                    'error'
                );
            }
        };
        xhrReq.send();
    } else {
        Swal.fire(
            'Invalid Zip Code!',
            'Please enter a valid Zip Code.!',
            'error'
        );
    }
});



//Play Video

var video = document.querySelector('video');
var promise = video.play();
var unmuteBtn = document.getElementById("unmute");
var muteBtn = document.getElementById("mute");

// Check if browser denied playing video with sound

if (promise !== undefined) {
    promise.then(_ => { 
        //show mute button
        muteBtn.style.display="block";
    }).catch(() => {
        //if browser denied play video by muting it
        video.muted = true;
        video.play();
        // show unmute button
        unmuteBtn.style.display = "block"
    });
}

unmuteBtn.addEventListener("click", () => {
    // unmute button onclick unmute the video and hide the button and show mute button
    video.muted = false;
    unmuteBtn.style.display = "none";
    muteBtn.style.display="block";
})

muteBtn.addEventListener("click", ()=>{
    video.muted=true;
    muteBtn.style.display = "none";
    unmuteBtn.style.display = "block"
})