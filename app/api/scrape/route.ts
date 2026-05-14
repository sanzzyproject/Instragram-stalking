import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ success: false, message: 'Username is required' }, { status: 400 });
  }

  try {
    const res = await fetch(`https://sqirk.com/sqirk/api.php?username=${username}`, {
      headers: {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Mobile Safari/537.36",
        "accept": "*/*",
        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
        "referer": "https://sqirk.com/sqirk/"
      }
    });

    const data = await res.json();

    if (!data.success || !data.exist) {
      return NextResponse.json({
        success: false,
        message: data.message || `Profil @${username} tidak ditemukan atau tidak ada`,
        exist: data.exist || false
      });
    }

    const profile = data.profile_data;
    const debug = data.debug;

    return NextResponse.json({
      success: true,
      profile: {
        username: profile.username,
        fullName: profile.full_name,
        biography: profile.biography,
        profilePicBase64: profile.profile_pic_url,
        profilePicUrl: debug?.image_url || null,
        postsCount: profile.posts_count,
        followedCount: profile.followed_count,
        followCount: profile.follow_count,    
        isVerified: profile.is_verified,
        isPrivate: profile.is_private
      },
      debug: {
        imageUrl: debug?.image_url,
        imageError: debug?.image_error,
        imageSize: debug?.image_size,
        contentType: debug?.detected_content_type
      }
    });

  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      message: `HTTP Error: ${error.message}` 
    }, { status: 500 });
  }
}
