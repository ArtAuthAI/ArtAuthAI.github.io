const URL = {
  timesheet: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSvznfmljkFXaaKuFz0yBj2-KF8qndFx4aOfgvHYQA5Ikr_SkvDRMXd4yXWV4qTCAWInMoxAe_1bDV1/pubhtml?gid=890696192&amp;single=true&amp;widget=true&amp;headers=false",
  synopsis: "https://docs.google.com/document/d/e/2PACX-1vQkcWE1VPVjhiLXYHRVyJb6MEe1k15PtYHfp-f-wkHzPPJha75gOuquKa4RPHRwtnztoOquAB63QzQ6/pub?embedded=true",
  skills: "https://docs.google.com/document/d/e/2PACX-1vRdCfse-zdoXIffZ2E4TqOcwawTUB7BiBwxOG2tQ6wIubLGou_G63iXfjS20APrmT1iwMgqBcw3KDqj/pub?embedded=true",
//  plan: "https://docs.google.com/document/d/e/2PACX-1vQV72Mi6weDvFDCAliDXMHqGHHdJUt3dFebrmJvsPeD4EaOZQGfc3UU0W_eunE66Evb7kJ-jBbZVDg4/pub?embedded=true",
  plan: "https://docs.google.com/document/d/e/2PACX-1vTFI2-Y30imBNwn0sbcOQIqvOdwyo2L6mwlA6E9qnkNr473x_T_ZehgpGpuTokUwyr80R_sCv_v0t3g/pub?embedded=true",
  domain: "https://app.lucidchart.com/documents/embeddedchart/7246c3b9-2ed7-4202-9047-72c822a9c082",
  fourups: "https://docs.google.com/document/d/e/2PACX-1vSNyVgn-iJKYNH2iPx-iTpLmdG3PRNbRCLsvCNwLHvwzA9jCmmtG0Lfxa8bxP4PbTFauAgXcqQNi1KS/pub?embedded=true"
}

updateNav = (pageName) => {
  // update active links
  navbar = document.getElementById("navbar")
  for (elem of navbar.children) {
    if (elem.getAttribute("href") == "#" + pageName) {
      elem.classList.add("active")
    } else {
      elem.classList.remove("active")
    }
  }
}

updateFrame = () => {
  frame = document.getElementById("frame")
  pageName = window.location.hash.substr(1)
  if (!(pageName in URL)) {
    pageName = "timesheet" // default page
  }

  // update
  frame.setAttribute("src", URL[pageName])
  updateNav(pageName)
}

window.onload = updateFrame
window.onhashchange = updateFrame

