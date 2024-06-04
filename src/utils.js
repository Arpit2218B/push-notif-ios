export const getPermission = () => {
  Notification.requestPermission(function (status) {
    alert(status);
    console.log('Notification permission status:', status);
  });
};

export const displayNotificationDirectly = async () => {
  if (Notification.permission !== 'granted') {
    alert('hello')
    console.log('notification permission missing');
    return;
  }

  const options = {
    body: 'This notification is send without a server, directly by the browser',
    icon: 'images/checkmark.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore this new world',
        icon: 'images/checkmark.png',
      },
      {
        action: 'close',
        title: 'Close notification',
        icon: 'images/xmark.png',
      },
    ],
  };

  const registration = await navigator.serviceWorker.getRegistration();
  registration.showNotification('Notification without Push API', options);
};
