const express = require('express')
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const router = express.Router();

const { createVenue, getVenuesByGroupId } = require('../../utils/venues');
const { getGroups, getCurrentGroups, getGroupById, createGroup, createGroupImage, editGroup, deleteGroup } = require('../../utils/groups');
const { validateGroupCreate, properGroupAuth, validGroupId, validateGroupEdit, properVenueAuth, validateVenueCreate } = require('../../utils/validation-and-error-handling');

router.route('/')
    .get(getGroups)
    .post(requireAuth, validateGroupCreate, createGroup)

router.route('/currentuser')
    .get(requireAuth, getCurrentGroups)

router.route('/:id/images')
    .all(validGroupId)
    .post(requireAuth, properGroupAuth, createGroupImage)

router.route('/:id/venues')
    .all(validGroupId, requireAuth)
    .get(properGroupAuth, getVenuesByGroupId)
    .post(properVenueAuth, validateVenueCreate, createVenue)

router.route('/:id')
    .all(validGroupId)
    .get(getGroupById)
    .put(requireAuth, properGroupAuth, validateGroupEdit, editGroup)
    .delete(requireAuth, properGroupAuth, deleteGroup)


module.exports = router;
