package com.example.panu.lutakko;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class DeepLinkHandler extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = getIntent();
        Uri data = intent.getData();
        String query = data.getQuery();
        Intent handlerIntent = new Intent(this, WebViewActivity.class);
        handlerIntent.putExtra("location", query);
        handlerIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        startActivity(handlerIntent);
    }
}
