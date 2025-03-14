# Overlays
Overlays are specially setup web pages that get displayed in OBS via a browser source. CastMate allows you to create Overlays using a click and drag interface. Changes you make inside of CastMate's overlay editor will automatically update in OBS when they're saved.

## Creating an Overlay
To create an overlay navigate to the overlays tab by clicking Overlays on the left. Click Add Overlay. Give your overlay a name and pick it's size. In most cases you'll want the size to match your output size in OBS.

![Creating Overlays](/images/docs/features/overlays/creating.png)

## Adding Widgets to your Overlay
Widgets are the building blocks of an overlay. An overlay can have multiple widgets. To add one click the Add Widget button in the bottom right.

![Add Widget](/images/docs/features/overlays/add-widget.png)

## Widgets
### Label
The label widget is a way of adding simple text to your overlay.
![Label](/images/docs/features/overlays/Label.png)
### Alert
The alert widget displays an image, gif, or video for a short time with some text.
![Alert](/images/docs/features/overlays/Alert.webp)
### Wheel
The wheel is a way to allow viewers to choose something.
![Wheel](/images/docs/features/overlays/wheel.png)
### Emote Bouncer
The emote bouncer spawns emotes used in chat as physics items. They will bounce around and collide with eachother for a short while.\
Supports Twitch, 7TV, BTTV, and FFZ static and animated emotes.
![Emotes](/images/docs/features/overlays/Emotes.webp)

## Getting your overlay into OBS
CastMate will create the browser source in OBS for you. Simply click the *Create Source* button.
![Source Create Button](/images/docs/features/overlays/source-create-button.png)
CastMate will ask you for what you want to name the source in OBS.
![Source Create Button](/images/docs/features/overlays/source-create.png)
OBS will create and configure the browser source adding it to the current scene.