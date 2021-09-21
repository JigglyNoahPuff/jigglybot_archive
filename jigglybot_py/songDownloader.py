from youtube_dl import YoutubeDL as YtDL
# 'https://youtu.be/h2JQ6jCDSFg' (italian), 'https://youtu.be/JdCq2i1dA6w' (nice cock kronk), 'https://youtu.be/z7fT6PdBptU' (can i get a waffle), 'https://youtu.be/d7mrBC0zLZg' (chicken strips), 
# urls = ['https://youtu.be/KJ070rc5hpw', 'https://youtu.be/_BcnxsvM6J8', 'https://youtu.be/jAXguUR4pOU', 'https://youtu.be/Ed-hguXms2Q', 'https://youtu.be/JdCq2i1dA6w', 'https://youtu.be/h2JQ6jCDSFg', 'https://youtu.be/I6v0nhEFUK8', 'https://youtu.be/R7BiKZbKffk', 'https://youtu.be/TiC8pig6PGE', 'https://youtu.be/T23s3O6iSiU', 'https://youtu.be/PDNZX2nql2Y', 'https://youtu.be/_pVNvSuA2mM', 'https://youtu.be/d6gBu2Zd7Bc', 'https://youtu.be/8EGliGWfuNI', 'https://youtu.be/3WAOxKOmR90', 'https://youtu.be/Obgnr9pc820', 'https://youtu.be/W6oQUDFV2C0', 'https://youtu.be/qr89xoZyE1g', 'https://youtu.be/c5Y25FT7DxE', 'https://youtu.be/yytbDZrw1jc', 'https://youtu.be/yytbDZrw1jc', 'https://youtu.be/9Deg7VrpHbM', 'https://youtu.be/c3m4Q07TkMk', 'https://youtu.be/Tlwda9S58Lg', 'https://youtu.be/F8W9370CHkk', 'https://youtu.be/Mvaa80lVcfg', 'https://youtu.be/jar1LTxxAeM', 'https://youtu.be/eTMb2UkW4xY', 'https://youtu.be/FPZi51GL3cs', 'https://youtu.be/iZlpsneDGBQ', 'https://youtu.be/NOPIobI_0B8', 'https://youtu.be/z7fT6PdBptU', 'https://youtu.be/FQ6_hKvCdMw', 'https://youtu.be/q4F2Qv5Ddcw', 'https://youtu.be/g9kZrOiqaKk', 'https://youtu.be/FZUcpVmEHuk', 'https://youtu.be/SLEdsI731J4', 'https://youtu.be/9sPthPleEKo', 'https://youtu.be/77sS5IuR0Gs', 'https://youtu.be/NsLKQTh-Bqo', 'https://youtu.be/d7mrBC0zLZg', 'https://youtu.be/sahAbxq8WPw', 'https://youtu.be/3w-2gUSus34', 'https://youtu.be/JfXCb9hSBMg', 'https://youtu.be/QISupPNCRYg', 'https://youtu.be/yOMj7WttkOA', 'https://youtu.be/g8ufRnf2Exc', 'https://youtu.be/ngdAwK-VT3Q', 'https://youtu.be/ehH9OQMQXIk', 'https://youtu.be/BS2hrc6TpIA', 'https://youtu.be/ei0ds1Dj6_c', 'https://youtu.be/hjsm-2oCcLk', 'https://youtu.be/LtH7l-dhHZQ', 'https://youtu.be/Acjf66Qdj2U', 'https://youtu.be/1Vi5MtBFdJo', 'https://youtu.be/Of_Apo0hcik', 'https://youtu.be/dNQs_Bef_V8', 'https://youtu.be/U6Jogncx9Hk', 'https://youtu.be/EcLPNGLRHU8', 'https://youtu.be/xZ_22WJW8rA', "https://youtu.be/uIauXFVABIQ", ]
urls = ['https://youtu.be/MGm0WCHmja4']


ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
    }
for url in urls:
    with YtDL(ydl_opts) as ydl:
        ydl.download([url])