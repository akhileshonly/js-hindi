// How To Track Elementor Form Submission With Google Tag Manager

jQuery( document ).ready(function( $ ){
jQuery( document ).on('submit_success', function(){

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'elementorFormSubmitted'
});
});
});

// How To Track Klaviyo Form Submission With Google Tag Manager

window.dataLayer = window.dataLayer || [];
window.addEventListener("klaviyoForms", function(e) { 
if (e.detail.type == 'submit') {
dataLayer.push({
'event' : 'klaviyoFormSubmission',
'formId' : e.detail.formId,
'formTitle' : e.detail.metaData.$source,
'formEmail': e.detail.metaData.$email
});
}
});

// How To Track Convertkit Form Submission With Google Tag Manager

<script type="text/javascript">
(function() {
document.addEventListener("submit", function(a) {
a.target.getAttribute("data-sv-form") && window.dataLayer.push({
event: "converkitform.submit",
convertKitFormId: a.target.getAttribute("data-sv-form"),
convertkitUserId: a.target.getAttribute("data-uid")
})
}, !0)
})();
</script>

// How To Track Hubspot Form Submission With Google Tag Manager

window.addEventListener("message", function(event) {
if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
window.dataLayer.push({
'event': 'hubspot-form-data',
'hs-form-guid': event.data.id,
'hs-formData': event.data.data
});
}
});
window.addEventListener("message", function(event) {
if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
window.dataLayer.push({
'event': 'hubspot-form-success',
'hs-form-guid': event.data.id
});
}
});

// How To Track Gravity Form Submission With Google Tag Manager

jQuery(document).ready(function() {
jQuery(document).bind("gform_confirmation_loaded", function(event, formID) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "formSubmissionSuccess",
formID: formID
});
});
});

// Note: make sure incluse <script> tag to each event listener

// How To Track Mailchimp For Wordpress Form Submissions With Google Tag Manager

//fired if form is submitted successfully
mc4wp.forms.on('success', function(form) {
window.dataLayer.push({
"event": "MailchimpFormSuccess",
"formID": form.id,
"formName": form.name
});
});
//fired if form is used to subscribe
mc4wp.forms.on('subscribed', function(form) {
window.dataLayer.push({
"event": "MailchimpFormSubscribed",
"formID": form.id,
"formName": form.name
});
});
//fired if form is submitted with errors
mc4wp.forms.on('error', function(form) {
window.dataLayer.push({
"event": "MailchimpFormError",
"formID": form.id,
"formName": form.name
});
});
//fired if form is used to unsubscribe
mc4wp.forms.on('unsubscribed', function(form) {
window.dataLayer.push({
"event": "MailchimpFormUnsubscribed",
"formID": form.id,
"formName": form.name
});
});
//fired once user starts filling in a form
mc4wp.forms.on('started', function(form) {
window.dataLayer.push({
"event": "MailchimpFormStarted",
"formID": form.id,
"formName": form.name
});
});

// More GTM Events Listener Here https://dumbdata.co/listeners/wistia/