# Video Integration Guide - Molinos Coloidal

## Overview
The Colloidal Mills product page has been set up with a responsive video player framework that supports both `.webm` and `.mp4` formats for maximum compatibility and performance.

## Video File Placement

### Directory Structure
Create the following directory in your project root:
```
innom/
├── videos/
│   ├── molino-coloidal-demo.webm
│   └── molino-coloidal-demo.mp4
```

### File Naming
- **Primary format**: `molino-coloidal-demo.webm` (recommended for modern browsers)
- **Fallback format**: `molino-coloidal-demo.mp4` (for older browsers and mobile devices)

## Video Optimization Guidelines

### File Size Requirements
- Keep video files under 50MB for optimal performance
- **Recommended sizes**:
  - WebM: 10-25 MB (HD quality)
  - MP4: 15-35 MB (HD quality)

### Video Compression

#### For WebM Format (Recommended)
```bash
ffmpeg -i input-video.mp4 -vcodec libvpx-vp9 -b:v 1M -acodec libopus -b:a 128k molino-coloidal-demo.webm
```

#### For MP4 Format (Fallback)
```bash
ffmpeg -i input-video.mp4 -vcodec libx264 -crf 23 -preset medium -acodec aac -b:a 128k molino-coloidal-demo.mp4
```

### Video Specifications
- **Resolution**: 1280x720 (720p) minimum for clear visibility
- **Frame rate**: 30fps (frames per second)
- **Bitrate**: 
  - WebM: 1000-1500 kbps
  - MP4: 1500-2000 kbps
- **Audio**: AAC or Opus codec, 128 kbps

## Current Video Implementation

### HTML Structure
The video player on `producto-molinos-coloidal.html` uses:
- **Responsive container** with 16:9 aspect ratio
- **Native `<video>` element** with controls
- **Multiple codec support** for browser compatibility
- **Fallback image** if video fails to load

### Features
✓ Pause/play controls  
✓ Volume control  
✓ Full-screen capability  
✓ Progress bar seeking  
✓ Mobile-optimized playback  
✓ Fast loading with lazy-load optimization  

## Deployment Instructions

### Step 1: Create Video Directory
```bash
# Create the videos folder in your project root
mkdir videos
```

### Step 2: Add Video Files
1. Convert your colloidal mill demonstration video to WebM and MP4 formats
2. Place both files in the `videos/` directory:
   - `videos/molino-coloidal-demo.webm`
   - `videos/molino-coloidal-demo.mp4`

### Step 3: Test Locally
1. Open `producto-molinos-coloidal.html` in your browser
2. Verify the video loads and plays smoothly
3. Test controls: play, pause, volume, fullscreen
4. Check mobile responsiveness by resizing window

### Step 4: Test Performance
1. Use browser DevTools (F12) → Network tab
2. Verify load time: should be < 2 seconds on 4G
3. Monitor bandwidth usage
4. Check CPU/memory usage during playback

## Browser Compatibility

| Browser | WebM Support | MP4 Support |
|---------|-------------|-----------|
| Chrome  | ✓ Native | ✓ Native |
| Firefox | ✓ Native | ✓ Plugin |
| Safari  | ✗ | ✓ Native |
| Edge    | ✓ Native | ✓ Native |
| Mobile Safari | ✗ | ✓ Native |

**Note**: WebM provides better compression for modern browsers. MP4 fallback ensures compatibility with Safari and older devices.

## Performance Optimization Tips

1. **Use CDN** for video delivery if file is large
2. **Enable browser caching** with proper HTTP headers
3. **Compress images** - fallback image should be < 100KB
4. **Monitor analytics** - track video watch time and completion rates
5. **A/B test** - compare autoplay vs. click-to-play engagement

## Troubleshooting

### Video Won't Load
- Check file permissions (should be readable)
- Verify file paths match configured names
- Check browser console for errors
- Ensure CORS headers are set if video is on different domain

### Video Plays But Has Issues
- Audio out of sync: Re-encode video with confirmed sync
- Stuttering: Reduce bitrate or resolution
- Buffering: Consider CDN or reduce file size

### Mobile Performance
- Disable autoplay on mobile (bandwidth efficiency)
- Test on actual devices, not just browser resizing
- Consider lower resolution (720p) for mobile variants

## Future Enhancements

Optional improvements for later:
- Analytics tracking (play events, watch time)
- Autoplay with muted option for better UX
- Multiple resolution variants for adaptive streaming
- Subtitles/captions for accessibility
- Thumbnail preview on hover
- Social sharing capabilities

## File Checklist

When deploying the updated website:
- [ ] Video directory created: `videos/`
- [ ] WebM file: `videos/molino-coloidal-demo.webm`
- [ ] MP4 file: `videos/molino-coloidal-demo.mp4`
- [ ] Both files tested locally
- [ ] Performance verified (load time < 2s)
- [ ] Mobile playback tested
- [ ] All browsers tested for compatibility
- [ ] Analytics tracking configured (optional)

---

**Last Updated**: March 21, 2026  
**Status**: Ready for video file deployment
