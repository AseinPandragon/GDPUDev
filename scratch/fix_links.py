# -*- coding: utf-8 -*-
# 修正失效外链（3 个 404 的 Unity 文档 + Autodesk 带年份 + 2 个脚本无法验证的改纯文本）
import io, os
BASE = r'e:\Programs\GDPUDev'
FIX = [
 ('ta/perf.html', 'https://docs.unity3d.com/Manual/BestPracticeGuides.html', 'https://docs.unity3d.com/Manual/FrameDebugger.html'),
 ('client/platform.html', 'https://docs.unity3d.com/Manual/Addressables.html', 'https://docs.unity3d.com/Manual/com.unity.addressables.html'),
 ('engine/pipeline.html', 'https://docs.unity3d.com/Manual/Addressables.html', 'https://docs.unity3d.com/Manual/com.unity.addressables.html'),
 ('engine/pipeline.html', 'https://docs.unity3d.com/Manual/AssetBundles-Introduction.html', 'https://docs.unity3d.com/Manual/AssetBundlesIntro.html'),
 ('ta/tools.html', 'https://help.autodesk.com/view/MAYAUL/ENU/', 'https://help.autodesk.com/view/MAYAUL/2025/ENU/'),
 ('ta/rigging.html', 'https://help.autodesk.com/view/MAYAUL/ENU/', 'https://help.autodesk.com/view/MAYAUL/2025/ENU/'),
 # 脚本 403/302 无法验证的，改为纯文本描述（防死链）
 ('ta/rendering.html', '<a class="inline-link" href="http://www.realtimerendering.com/" target="_blank" rel="noopener">官网有免费章节</a>', '官网提供部分章节试读'),
 ('ta/perf.html', '<a class="inline-link" href="https://developer.android.com/games/agpi" target="_blank" rel="noopener">Android GPU Inspector</a>', 'Android GPU Inspector（谷歌官方工具，搜索 AGI）'),
]
for rel, old, new in FIX:
    fp = os.path.join(BASE, rel.replace('/', '\\'))
    t = io.open(fp, encoding='utf-8').read()
    if old in t:
        t = t.replace(old, new)
        io.open(fp, 'w', encoding='utf-8', newline='\r\n').write(t)
        print('fixed:', rel, '|', old[:60])
    else:
        print('NOT FOUND:', rel, '|', old[:60])
