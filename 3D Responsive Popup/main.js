// Copyright (C) 2022 Govind Panchawat
//
// This file is part of 3D Responsive Popup.
//
// 3D Responsive Popup is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// 3D Responsive Popup is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with 3D Responsive Popup.  If not, see <http://www.gnu.org/licenses/>.

var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function (e) {
  var docX = $(document).width();
  var docY = $(document).height();

  var moveX = ((e.pageX - docX / 2) / (docX / 2)) * -moveForce;
  var moveY = ((e.pageY - docY / 2) / (docY / 2)) * -moveForce;

  var rotateY = (e.pageX / docX) * rotateForce * 2 - rotateForce;
  var rotateX = -((e.pageY / docY) * rotateForce * 2 - rotateForce);

  $(".popup")
    .css("left", moveX + "px")
    .css("top", moveY + "px")
    .css(
      "transform",
      "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"
    );
});
