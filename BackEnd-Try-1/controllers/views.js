const path = require('path');
const express = require('express');

// const schema = require('./models/Schema');
const schema = require('../models/Schema')

const renderPage = (page) => (req, res) => {
    res.render(page);
};

const renderPageEvents = (page) => (req, res) => {
    res.render(`templates/${page}`);
};

index = renderPage('index');
explore = renderPage('explore');
team = renderPage('team');
about = renderPage('about_dept');



cubical_realm = renderPageEvents('cubical_realm');
giga_gen = renderPageEvents('giga_gen');
beatbots = renderPageEvents('beat_bots');
OptiML = renderPageEvents('opti_ml');
ss = renderPageEvents('startup_mela');

reg = renderPage('reg');
payment = renderPage('payment');



module.exports = {
    index,
    explore,
    team,
    about,
    cubical_realm,
    giga_gen,
    beatbots,
    OptiML,
    ss,
    reg,
    payment,
};
