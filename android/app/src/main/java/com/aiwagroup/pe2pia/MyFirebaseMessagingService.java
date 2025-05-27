package com.aiwagroup.pe2pia;

import android.util.Log;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.dieam.reactnativepushnotification.modules.RNPushNotificationHelper;
import android.os.Bundle;

public class MyFirebaseMessagingService extends FirebaseMessagingService {
    private static final String TAG = "MyFirebaseMsgService";

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);

        Log.d(TAG, "From: " + remoteMessage.getFrom());

        boolean hasData = remoteMessage.getData().size() > 0;
        boolean hasNotification = remoteMessage.getNotification() != null;

        if (hasData || hasNotification) {
            handleNotification(remoteMessage);
        }
    }

    private void handleNotification(RemoteMessage remoteMessage) {
        Bundle bundle = new Bundle();

        // Add all data fields to the bundle
        for (String key : remoteMessage.getData().keySet()) {
            bundle.putString(key, remoteMessage.getData().get(key));
        }

        // Check for title and body in the data payload first
        String title = remoteMessage.getData().get("title");
        if (title == null) {
            title = remoteMessage.getNotification() != null ? remoteMessage.getNotification().getTitle() : null;
        }
        String body = remoteMessage.getData().get("message");
        if (body == null) {
            body = remoteMessage.getNotification() != null ? remoteMessage.getNotification().getBody() : null;
        }

        // If not present in data payload, check notification payload
        if (title == null && remoteMessage.getNotification() != null) {
            title = remoteMessage.getNotification().getTitle();
        }
        if (body == null && remoteMessage.getNotification() != null) {
            body = remoteMessage.getNotification().getBody();
        }

        // Set default values if still not present
        if (title == null) {
            title = "New Notification";
        }
        if (body == null) {
            body = "You have a new notification";
        }
        // Log the final title and body
        Log.d(TAG, "Final Notification Title: " + title);
        Log.d(TAG, "Final Notification Body: " + body);

        // Add title and body to the bundle
        bundle.putString("title", title);
        bundle.putString("body", body);

        // Add required fields for the notification
        bundle.putBoolean("foreground", false);
        bundle.putBoolean("userInteraction", true);
        bundle.putString("channelId", "notifications");
        bundle.putString("smallIcon", "ic_notification");
        bundle.putString("largeIcon", "ic_launcher");
        bundle.putBoolean("autoCancel", true);
        bundle.putBoolean("showWhen", true);
        bundle.putBoolean("vibrate", true);
        bundle.putLongArray("vibrationPattern", new long[]{0, 500, 500, 500});
        bundle.putString("color", "#000000");

        // Send to notification center
        RNPushNotificationHelper helper = new RNPushNotificationHelper(getApplication());
        helper.sendToNotificationCentre(bundle);

        Log.d(TAG, "Notification processed: " + bundle.toString());
    }

    @Override
    public void onNewToken(String token) {
        Log.d(TAG, "Refreshed token: " + token);
    }
}
