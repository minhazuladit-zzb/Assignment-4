function switchTab(tabName) {
    const all = document.getElementById("all-container");
    const interview = document.getElementById("interview-container");
    const rejected = document.getElementById("rejected-container");
    
    const btnAll = document.getElementById("tab-all");
    const btnInt = document.getElementById("tab-interview");
    const btnRej = document.getElementById("tab-rejected");

    
    all.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");

   
    [btnAll, btnInt, btnRej].forEach(btn => btn.classList.remove("bg-slate-800", "text-white"));

   
    if (tabName === "all") {
        all.classList.remove("hidden");
        btnAll.classList.add("bg-slate-800", "text-white");
    } else if (tabName === "interview") {
        interview.classList.remove("hidden");
        btnInt.classList.add("bg-slate-800", "text-white");
    } else {
        rejected.classList.remove("hidden");
        btnRej.classList.add("bg-slate-800", "text-white");
    }
}

function applyAction(jobId, status) {
    const jobCard = document.getElementById(jobId);
    const target = document.getElementById(status + "-container");
    
    
    target.appendChild(jobCard);
    
  
    jobCard.querySelector(".flex").classList.add("hidden");

    
    const count = target.children.length;
    document.getElementById("stat-" + status).innerText = count;
}

switchTab('all');