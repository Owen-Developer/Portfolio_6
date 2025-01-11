let skillBoxes = document.querySelectorAll(".skill-box");
let testPara = document.querySelector(".test-para");
let testAvatar = document.querySelector(".test-avatar");
let persName = document.querySelector(".pers-name");
let persJob = document.querySelector(".pers-job");
let projSets = document.querySelectorAll(".proj-set");

let serviceIdx = 0;
let skillIdx = 0;
let testIdx = 0;
let projSet = 0;
let projIdx = 0;
let skillTimeout = false;

let testNames = ["Liam Foster", "Emily Harper", "Olivia Bennett", "Noah Brooks", "James Hudson"];
let testJobs = ["Marketing Director", "Data Analyst", "Creative Director", "Product Designer", "Web Developer"];
let testParas = ['"Their approach to branding was incredibly thoughtful and personalized. They took the time to understand our vision and brought it to life with stunning design work. The team was attentive, and delivered beyond our expectations. I would recommend them to anyone seeking branding solutions."',
                '"The team went above and beyond to create a website that truly reflects our brand. They were innovative, collaborative, and paid attention to every detail. Their expertise and responsiveness made the process seamless. I highly recommend them to anyone looking for a professional and visually stunning website."',
                '"From the initial consultation to the final logo delivery, their process was both efficient and enjoyable. They listened closely to our ideas and transformed them into a design that exceeded our expectations. The teams professionalism and creativity were outstanding. I’d recommend them without hesitation."',
                '"They took the time to understand our goals and delivered a mobile app that was not only functional but visually captivating. Their dedication to quality and user experience was evident in every step of the process. I highly recommend their team to anyone in need of custom app design."',
                '"Their expertise in responsive design completely transformed our online presence. They created a layout that looks fantastic on every device and boosted our user engagement. The team was professional, efficient, and a pleasure to work with. I’d recommend them to anyone serious about improving their website."'
                ];
let projNames = ["Xmatch", "StayScape", "Nexacard"];

skillBoxes.forEach((box, idx) => {
    setInterval(() => {
        let oldImg = box.querySelectorAll(".active-img")[serviceIdx];
        let nextImg;
        if(serviceIdx == 2){
            nextImg = box.querySelectorAll(".active-img")[0];
            if(idx == 2){
                serviceIdx = 0;
            }
        } else {
            nextImg = box.querySelectorAll(".active-img")[serviceIdx + 1];
            if(idx == 2){
                serviceIdx++;
            }
        }
        oldImg.style.opacity = "0";
        setTimeout(() => {
            nextImg.style.opacity = "1";
        }, 400);
    }, 3000);

    box.addEventListener("click", () => {
        if(idx != skillIdx && !skillTimeout){
            skillTimeout = true;
            setTimeout(() => {skillTimeout = false}, 1000);
            skillIdx = idx;
            skillBoxes.forEach((element, index) => {
                if(index != idx){
                    closeService(element, index);
                }
            });
            setTimeout(() => {
                activateService(box, idx);
            }, 600);
        }
    });
});
function activateService(selectedBox, boxIdx){
    selectedBox.style.backgroundColor = "hsl(0, 0%, 97%)";
    selectedBox.querySelector(".skill-arrow-wrapper").style.backgroundColor = "black";
    selectedBox.querySelector(".skill-arr").style.color = "white";
    selectedBox.querySelector(".active-container").style.opacity = "1";
    document.querySelectorAll(".skill-border").forEach((border, borderIdx) => {
        if(borderIdx == boxIdx || borderIdx == (boxIdx + 1)){
            border.classList.remove("border-closed");
            border.classList.add("border-active");
        }
    });
}
function closeService(oldBox, boxIdx){
    oldBox.style.backgroundColor = "transparent";
    oldBox.querySelector(".skill-arrow-wrapper").style.backgroundColor = "transparent";
    oldBox.querySelector(".skill-arr").style.color = "black";
    oldBox.querySelector(".active-container").style.opacity = "0";
    document.querySelectorAll(".skill-border").forEach((border, borderIdx) => {
        if(borderIdx == boxIdx || borderIdx == (boxIdx + 1)){
            border.classList.remove("border-active");
            border.classList.add("border-closed");
        }
    });
}

function changeReview(direction){
    // vis non
    testPara.style.opacity = "0";
    testAvatar.style.opacity = "0";
    persName.style.opacity = "0";
    persJob.style.opacity = "0";
    
    if(direction == "right"){
        if(testIdx == 4){
            testIdx = 0;
        } else {
            testIdx++;
        }
    } else if(direction == "left"){
        if(testIdx == 0){
            testIdx = 4;
        } else {
            testIdx--;
        }
    }
    //wait for opacity 0, change content
    setTimeout(() => {
        testPara.textContent = testParas[testIdx];
        testAvatar.src = "images/avatars/test-av" + (testIdx + 1) + ".png";
        persName.textContent = testNames[testIdx];
        persJob.textContent = testJobs[testIdx];
    }, 500);
    setTimeout(() => {
        testPara.style.opacity = "1";
        testAvatar.style.opacity = "1";
        persName.style.opacity = "1";
        persJob.style.opacity = "1";
    }, 520);
}

projSets.forEach((set, idx) => {
    setInterval(() => {
        let oldImg = set.querySelectorAll(".proj-img")[projIdx];
        let nextImg;
        if(projIdx == 2){
            nextImg = set.querySelectorAll(".proj-img")[0];
            if(idx == 2){
                projIdx = 0;
            }
        } else {
            nextImg = set.querySelectorAll(".proj-img")[projIdx + 1];
            if(idx == 2){
                projIdx++;
            }
        }
        oldImg.style.opacity = "0";
        setTimeout(() => {
            nextImg.style.opacity = "1";
        }, 400);
    }, 3000);
});

function moveProjects(direction){
    let projOffset;
    if(window.innerWidth <= 1100){
        projOffset = "1100px";
    } else {
        projOffset = "2000px";
    }
    projOffset = String(window.innerWidth + 100) + "px";
    let oldSet = projSets[projSet];
    if(direction == "right"){
        if(projSet == 2){
            projSet = 0;
        } else {
            projSet++;
        } 
        let newSet = projSets[projSet];
        newSet.style.transition = "0s ease";
        newSet.style.left = "-" + projOffset;
        setTimeout(() => {
            oldSet.style.transition = "0.8s ease";
            oldSet.style.left = projOffset;
            setTimeout(() => {
                newSet.style.transition = "0.8s ease";
                newSet.style.left = "0px";
            }, 200);
        }, 20);
    } else if(direction == "left"){
        if(projSet == 0){
            projSet = 2;
        } else {
            projSet--;
        } 
        let newSet = projSets[projSet];
        newSet.style.transition = "0s ease";
        newSet.style.left = projOffset;
        setTimeout(() => {
            oldSet.style.transition = "0.8s ease";
            oldSet.style.left = "-" + projOffset;
            setTimeout(() => {
                newSet.style.transition = "0.8s ease";
                newSet.style.left = "0px";
            }, 200);
        }, 20);
    }
    document.querySelector(".info-head").textContent = projNames[projSet];
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = "0.5s ease";
        entry.target.style.position = "relative";
        entry.target.style.bottom = "0px";
        entry.target.classList.remove("scroll-target");

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0 // Trigger when 10% of the element is visible
});
document.querySelectorAll(".scroll-target").forEach(target => {
    observer.observe(target);
});

function triggerStartAnimation(){
    let starters = document.querySelectorAll(".starter"); // avatar, para, title, scroll, img
    let startOrder = [];
    if(window.innerWidth <= 720){
        startOrder.push(starters[2], starters[1], starters[4]);
    } else if(window.innerWidth <= 1100){
        startOrder.push(starters[0], starters[1], starters[2], starters[4]);
    } else {
        startOrder.push(starters[0], starters[1], starters[2], starters[3], starters[4]);
    }
    console.log(startOrder);

    startOrder.forEach((element, idx) => {
        element.style.position = "relative";
        element.style.transition = "0.5s ease";
        setTimeout(() => {
            element.style.bottom = "0px";
            element.classList.remove("starter");
        }, 250 * (idx + 1));
    });
}
triggerStartAnimation();