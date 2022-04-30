var services = new Services();

function getListTeam() {
    // Show loading
    document.getElementById("loading").style.display = "block";
    services
        .fetchData()
        .then(function(result) {
            // Hide loading
            document.getElementById("loading").style.display = "none";
            renderHTML(result.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}
getListTeam();

function renderHTML(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var teacher = arr[i];
        if (teacher.loaiND === "GV") {
            content += `
        <div class="col-12 col-md-6 col-lg-3">
            <div>
                <div class="card text-left">
                    <img src="./images/${teacher.hinhAnh}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div class="d-block text-center" style="height: 150px;">
                            <div>
                                <p class="cardTeacher__text" style="color:#b61984; font-size: 0.8rem">${teacher.ngonNgu}</p>
                                <h3 class="cardTeacher__title"  style="font-size: 1.5rem; font-weight: 600">${teacher.hoTen}</h3>
                            </div>
                            <div>
                                <p class="cardTeacher__text">${teacher.moTa}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
        }
    }
    document.getElementById("teacherList").innerHTML = content;
}