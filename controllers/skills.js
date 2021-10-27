// CONTROLLERS SKILLS.JS

import * as skillsDb from "../data/skills-db.js"

function index(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render("skills/index", {
      skills,
      error,
      title: "Skills Index"
    })
  })
}

function show(req, res) {
  skillsDb.findById(req.params.id, function(error, skill){
    res.render("skills/show", {
      skill,
      error,
      title: "Skills Detail"
    })
  })
}

export {
  index,
  show
}