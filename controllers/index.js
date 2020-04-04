/**
 * File: index.js
 * Author: Josh Bakos
 * Student ID: 100652490
 * Date: 2020-04-04
 */

// Controller modules
module.exports.displayHome = (res) =>
{
  res.render('index',
  {
    title: 'Home'
  });
}


module.exports.displayAbout = (res) =>
{
  res.render('index',
  {
    title: 'About'
  });
}


module.exports.displayProjects = (res) =>
{
  res.render('index',
  {
    title: 'Projects'
  });
}


module.exports.displayServices = (res) =>
{
  res.render('index',
  {
    title: 'Services'
  });
}


module.exports.displayContact = (res) =>
{
  res.render('index',
  {
    title: 'Contact'
  });
}