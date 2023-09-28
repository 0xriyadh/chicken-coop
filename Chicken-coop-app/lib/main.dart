// This app is written by Ratul Hasan //
// https://github.com/Onnesok //
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'src/navigation_controls.dart';
import 'src/web_view_stack.dart';

void main() {
  runApp(
    MaterialApp(
      theme: ThemeData(useMaterial3: true),
      home: const ChickenCoop(),
      debugShowCheckedModeBanner: false,
    ),
  );
}

class ChickenCoop extends StatefulWidget {
  const ChickenCoop({super.key});

  @override
  State<ChickenCoop> createState() => _ChickenCoopState();
}

class _ChickenCoopState extends State<ChickenCoop> {
  late final WebViewController controller;

  @override
  void initState() {
    super.initState();
    controller = WebViewController()
      ..loadRequest(
        Uri.parse('https://chicken-coop.vercel.app/'),
      );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Chicken Coop'),
        actions: [
          NavigationControls(controller: controller),
        ],
      ),
      body: WebViewStack(controller: controller),
    );
  }
}