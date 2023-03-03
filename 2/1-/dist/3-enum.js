"use strict";
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership = Membership.Premium;
const membership1 = Membership[1];
console.log(membership);
console.log(membership1);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
})(SocialMedia || (SocialMedia = {}));
const soical = SocialMedia.FACEBOOK;
//# sourceMappingURL=3-enum.js.map