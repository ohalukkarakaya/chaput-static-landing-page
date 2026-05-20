const company = "GÖKTİGİN BİLİŞİM TEKNOLOJİ LİMİTED ŞİRKETİ";
const address =
  "Pınarbaşı Mah. Hürriyet Cad. Akdeniz Üniversitesi Uluğbey Ar-Ge 2 No: 3A İç Kapı No: B103 Konyaaltı / Antalya";
const email = "hello@goktigin.com";
const website = "https://goktigin.com";
const mersis = "0406072354000001";
const taxNo = "4060723540";
const contactPerson = "Özgür Haluk Karakaya";
const controllerRole = "veri sorumlusu";
const controllerRoleEn = "data controller";

export const site = {
  brand: "Chaput",
  domain: "https://chaput.app",
  trDates: {
    effective: "20.05.2026",
    updated: "20.05.2026",
  },
  enDates: {
    effective: "20 May 2026",
    updated: "20 May 2026",
  },
};

export const docs = [
  {
    slug: "terms",
    tr: {
      title: "Kullanıcı Sözleşmesi",
      description:
        "Chaput mobil uygulamasının kullanım koşulları, hesap kuralları, içerik görünürlüğü, satın alma, moderasyon ve kullanıcı yükümlülükleri.",
      summary:
        "Bu Kullanıcı Sözleşmesi, Chaput mobil uygulaması ve bağlantılı hizmetlerin kullanım şartlarını düzenler.",
      blocks: [
        `<h2>1. Taraflar ve Kapsam</h2>
        <p>Bu Kullanıcı Sözleşmesi, ${company}, ${address}, MERSİS No: ${mersis}, Vergi No: ${taxNo}, web sitesi: ${website} (“Chaput”, “Şirket”, “biz”) ile Chaput mobil uygulamasını, ilgili internet sayfalarını ve bağlantılı hizmetleri kullanan gerçek kişi kullanıcı (“Kullanıcı”, “siz”) arasında kurulmaktadır.</p>
        <p>Chaput; kullanıcıların profil ağacı üzerinde chaput bırakmasına, cevap vermesine, halka açık veya sınırlı görünürlüğe sahip akışlar oluşturmasına, kullanıcıları takip etmesine, engellemesine, kısıtlamasına, içerik raporlamasına ve belirli dijital özellikler için abonelik veya kredi kullanmasına imkân tanıyan sosyal bir iletişim hizmetidir.</p>`,

        `<h2>2. Uygunluk ve Hesap</h2>
        <p>Chaput'u kullanabilmeniz için en az 13 yaşında olmanız ve ikamet ettiğiniz yerde hizmeti kullanmak için gerekli asgari yaş şartını sağlamanız gerekir. Hizmeti kullanırken doğru, güncel ve size ait hesap bilgileri sağlamayı kabul edersiniz.</p>
        <p>Hesap oluşturma ve giriş süreçleri, uygulamanın ilgili sürümünde e-posta doğrulaması, doğrulama kodu, uygulama içi cihaz tanımlayıcısı, oturum ve güvenlik kontrolleri ile yürütülebilir. Giriş bilgilerinizi ve cihaz erişiminizi korumaktan siz sorumlusunuz.</p>
        <p>Başka bir kişi adına yetkisiz hesap açamaz, başkasını taklit edemez, yanıltıcı profil oluşturamaz veya hesabınızı hukuka aykırı amaçlarla kullanamazsınız.</p>`,

        `<h2>3. İçerik, Profil ve Görünürlük Mantığı</h2>
        <p>Chaput içinde paylaştığınız profil bilgileri, profil fotoğrafı, sosyal bağlantılar, chaput içerikleri, cevaplar, fısıltılar, beğeniler ve benzeri kullanıcı içerikleri uygulamanın işleyişinin bir parçasıdır. Uygulamanın belirli sürümlerinde profiliniz herkese açık veya özel olabilir; özel profil akışlarına erişim takip ilişkisine veya ürün kurallarına bağlanabilir.</p>
        <p>Normal veya halka açık akışlar, ilgili profil ve işlev kuralları elverdiği ölçüde başka kullanıcılar tarafından görülebilir. Fısıltı türündeki mesajlar ürün mantığı gereği katılımcı olmayan kullanıcılara maskelemeli gösterilebilir veya hiç gösterilmeyebilir. Hidden, secret, private, whisper veya benzeri etiketler hiçbir durumda mutlak gizlilik, mutlak anonimlik veya üçüncü kişilerden tamamen yalıtılmış iletişim vaadi oluşturmaz.</p>
        <p>Güvenlik, destek, kötüye kullanım önleme, moderasyon, teknik bakım ve hukuki yükümlülükler kapsamında içerikler; yetkili personelimiz, talimatlı hizmet sağlayıcılarımız veya yetkili merciler tarafından incelenebilir, kaldırılabilir, erişimi sınırlandırılabilir veya saklanabilir.</p>`,

        `<h2>4. Kullanıcı İçeriği Lisansı</h2>
        <p>Kullanıcı içeriğiniz üzerindeki haklarınız, zorunlu mevzuat saklı kalmak kaydıyla size aittir. Bununla birlikte bize, hizmeti işletmek, depolamak, çoğaltmak, işlemek, görüntülemek, yayımlamak, moderasyon uygulamak, ihlal incelemesi yürütmek, şikâyetleri ele almak ve yasal taleplere cevap vermek amacıyla dünya çapında, münhasır olmayan, devredilebilir, alt lisans verilebilir ve bedelsiz bir kullanım yetkisi verirsiniz.</p>
        <p>Bu yetki, hesabınızı ve ilgili içeriği sildiğimiz ölçüde veya ilgili saklama süresi sona erdiğinde sona erer; ancak daha önce paylaşılmış kamusal kayıtlar, yedekleme döngüleri, hukuki yükümlülükler ve uyuşmazlık yönetimi için makul ölçüde gerekli saklamalar bundan etkilenmeyebilir.</p>`,

        `<h2>5. Yasaklı Davranışlar</h2>
        <ul>
          <li>Hukuka aykırı, tehditkâr, taciz edici, nefret içeren, ayrımcı, yanıltıcı veya dolandırıcılık amaçlı içerik paylaşmak.</li>
          <li>Çocukların cinsel istismarı, cinsel sömürü, çıplaklık istismarı, insan ticareti, intihara yönlendirme, şiddet çağrısı veya terör propagandası içeren içerik üretmek ya da yaymak.</li>
          <li>Gazi Mustafa Kemal Atatürk'e veya hatırasına yönelik, 5816 sayılı Atatürk Aleyhine İşlenen Suçlar Hakkında Kanun kapsamına girebilecek nitelikte ya da platform politikamız bakımından küçümseyici, hakaret içeren, sövme niteliğinde veya bu tür içerikleri ima eden kullanıcı adı, profil adı, biyografi, görsel, profil fotoğrafı, chaput, mesaj, fısıltı veya benzeri içerikler üretmek, paylaşmak veya yaymak.</li>
          <li>İzinsiz reklam, spam, otomatik toplu hareket, yapay etkileşim, scraping, reverse engineering, güvenlik testleri veya hizmeti aşırı yükleme girişimlerinde bulunmak.</li>
          <li>Başka kullanıcıların gizliliğini ihlal etmek, kişisel verilerini izinsiz paylaşmak, doxxing yapmak veya uygulamadaki görünürlük sınırlarını teknik yollarla aşmaya çalışmak.</li>
          <li>Kredi, abonelik, reklam ödülü, raporlama, engelleme veya moderasyon sistemlerini kötüye kullanmak.</li>
        </ul>`,

        `<h2>6. Abonelikler, Krediler ve Dijital Satın Almalar</h2>
        <p>Chaput belirli dijital özellikleri abonelikler, tek kullanımlık veya çok kullanımlık krediler, reklam ödülleri veya benzeri dijital erişim modelleri üzerinden sunabilir. Mevcut kod tabanı, farklı türlerde chaput kredileri ve abonelik planları bulunduğunu göstermektedir; güncel ürün, fiyat, para birimi, yenileme dönemi ve hak kapsamı uygulamada veya ilgili mağaza ekranında gösterildiği şekliyle geçerlidir.</p>
        <p>iOS tarafında Apple, Android tarafında Google Play faturalandırması kullanılabilir. RevenueCat benzeri üçüncü taraf abonelik yönetim altyapıları, satın alma doğrulama ve hak senkronizasyon süreçlerinde hizmet sağlayıcı olarak kullanılabilir. Uygulama içinde sunulan dijital içerik, özellik veya avantajlar için aksi zorunlu hukuk kuralları uygulanmadıkça mağaza kuralları ve bu sözleşme birlikte geçerlidir.</p>
        <p>Tüketilen krediler, kullanılmış avantajlar, reklam karşılığı kazanılmış haklar ve kötüye kullanım şüphesiyle askıya alınan işlemler, yürürlükteki hukuk saklı kalmak kaydıyla iade veya geri yükleme bakımından ek incelemeye tabi olabilir.</p>`,

        `<h2>7. Moderasyon ve Yaptırım</h2>
        <p>Topluluk Kuralları, İçerik Moderasyon ve Şikâyet Politikası ile diğer ürün kurallarımızı ihlal eden içerik ve hesaplara karşı uyarı, görünürlük azaltma, içeriği gizleme, arşivleme, kaldırma, satın alma haklarını sınırlama, hesabı dondurma, erişimi sonlandırma, cihaz veya hesap eşleştirmelerini iptal etme ve gerekli hallerde kalıcı yasak uygulama hakkımız saklıdır.</p>
        <p>Gazi Mustafa Kemal Atatürk'e veya hatırasına yönelik, 5816 sayılı Kanun kapsamına girebilecek nitelikte ya da platform politikamız bakımından küçümseyici, hakaret içeren, sövme niteliğinde veya bu tür içerikleri ima eden içeriklerin tespit edilmesi halinde ilgili içerik kaldırılır, hesap kalıcı olarak yasaklanır ve yetkili mercilere şikâyet ve/veya bildirimde bulunulur.</p>
        <p>Şikâyetlerin değerlendirilmesi, otomatik sinyaller ve insan incelemesi birlikte kullanılarak yapılabilir. Ağır ihlallerde ön bildirim yapılmaksızın işlem uygulanabilir.</p>`,

        `<h2>8. Hesabın Dondurulması, Silinmesi ve Erişimin Sonlandırılması</h2>
        <p>Kod incelemesi, uygulamada hesabın dondurulması, dondurmanın kaldırılması ve kalıcı silme akışlarının bulunduğunu göstermektedir. Hesabın dondurulması oturumların sonlandırılması veya erişimin askıya alınması sonucunu doğurabilir; bu işlem hesap silme ile aynı değildir.</p>
        <p>Hesabınızı silmeniz halinde, hizmeti sağlamak için artık gerekli olmayan veriler silinebilir, yok edilebilir veya anonim hale getirilebilir. Bununla birlikte hukuki yükümlülükler, uyuşmazlıklar, güvenlik incelemeleri, dolandırıcılık önleme, satın alma iadesi veya hak geri yükleme kayıtları için bazı veriler daha uzun süre tutulabilir.</p>`,

        `<h2>9. Hizmetin Sürekliliği ve Sorumluluk Reddi</h2>
        <p>Chaput'u kesintisiz, hatasız veya her zaman erişilebilir şekilde sunacağımızı garanti etmiyoruz. Bakım, güvenlik, mağaza onayı, üçüncü taraf altyapı kesintileri, bildirim sağlayıcıları, ödeme sistemleri veya mevzuat değişiklikleri nedeniyle hizmetin bir kısmı askıya alınabilir, değiştirilebilir veya sonlandırılabilir.</p>
        <p>Zorunlu tüketici mevzuatından doğan haklarınız saklıdır. Bunun dışındaki hallerde, dolaylı zararlar, kâr kaybı, itibar kaybı veya veri kaybı bakımından sorumluluğumuz, emredici hukuk kurallarının izin verdiği azami ölçüde sınırlandırılır.</p>`,

        `<h2>10. Uygulanacak Hukuk ve İletişim</h2>
        <p>Bu sözleşme, emredici tüketici koruma hükümleri saklı kalmak üzere Türkiye Cumhuriyeti hukukuna tabidir. Tüketici işlemlerinden doğan uyuşmazlıklarda yetkili tüketici hakem heyetleri, tüketici mahkemeleri ve zorunlu başvuru mercileri saklıdır.</p>
        <p>Bu sözleşme ile ilgili bildirimler için bizimle ${email} üzerinden iletişime geçebilirsiniz.</p>`,
      ],
    },
    en: {
      title: "Terms of Service",
      description:
        "Terms for using the Chaput mobile application, including account rules, visibility, purchases, moderation, and user responsibilities.",
      summary:
        "These Terms of Service govern your use of the Chaput mobile application and related services.",
      blocks: [
        `<h2>1. Parties and Scope</h2>
        <p>These Terms of Service are entered into between ${company}, ${address}, MERSIS No. ${mersis}, Tax No. ${taxNo} (“Chaput”, “Company”, “we”) and the natural person using the Chaput mobile application, related web pages, and connected services (“User”, “you”).</p>
        <p>Chaput is a social communication service that allows users to leave chaputs on profile trees, reply, create public or limited-visibility flows, follow other users, block or restrict users, report content, and use subscriptions or credits for certain digital features.</p>`,

        `<h2>2. Eligibility and Account</h2>
        <p>You must be at least 13 years old, and meet any higher minimum age required by the law of your place of residence, to use Chaput. You agree to provide accurate, current, and personal account information when using the service.</p>
        <p>Account creation and login may be operated through email verification, verification codes, app-level device identifiers, sessions, and security checks in the relevant product version. You are responsible for protecting access to your email account, devices, and session credentials.</p>
        <p>You may not create unauthorized accounts on behalf of others, impersonate another person, maintain a misleading profile, or use the service for unlawful purposes.</p>`,

        `<h2>3. Content, Profile, and Visibility Logic</h2>
        <p>Your profile information, profile photo, social links, chaputs, replies, whispers, likes, and similar user content are part of how the service operates. In certain product versions, your profile may be public or private; access to private profile flows may depend on follow status or product rules.</p>
        <p>Normal or public flows may be visible to other users to the extent allowed by the relevant profile and feature rules. Whisper-type messages may be masked or withheld from non-participants in the ordinary product flow. Labels such as hidden, secret, private, whisper, or similar must never be understood as a promise of absolute secrecy, absolute anonymity, or complete isolation from third-party access.</p>
        <p>For security, support, abuse prevention, moderation, technical maintenance, and legal compliance, content may be reviewed, restricted, removed, or retained by our authorized personnel, instructed service providers, or competent authorities.</p>`,

        `<h2>4. License to User Content</h2>
        <p>Subject to mandatory law, you retain rights in your user content. However, you grant us a worldwide, non-exclusive, transferable, sublicensable, and royalty-free license to host, store, reproduce, process, display, publish, moderate, investigate violations, handle complaints, and respond to legal requests as necessary to operate the service.</p>
        <p>This license ends to the extent we delete your account and relevant content or when the applicable retention period expires; however, previously shared public records, backup cycles, legal obligations, and reasonably necessary dispute-management retention may continue to apply.</p>`,

        `<h2>5. Prohibited Conduct</h2>
        <ul>
          <li>Posting unlawful, threatening, abusive, hateful, discriminatory, deceptive, or fraudulent content.</li>
          <li>Creating or distributing content involving child sexual abuse, sexual exploitation, exploitative nudity, human trafficking, incitement to suicide, calls to violence, or terrorist propaganda.</li>
          <li>Creating, sharing, or distributing usernames, profile names, biographies, images, profile photos, chaputs, messages, whispers, or similar content that may fall within the scope of Turkish Law No. 5816 on Crimes Against Ataturk, or that is otherwise demeaning, abusive, insulting, profane toward, or implying insult or denigration of Gazi Mustafa Kemal Ataturk or his memory under our platform rules.</li>
          <li>Engaging in unauthorized advertising, spam, automated bulk actions, artificial engagement, scraping, reverse engineering, security testing, or attempts to overload the service.</li>
          <li>Violating the privacy of others, disclosing personal data without permission, doxxing, or attempting to bypass visibility limits through technical means.</li>
          <li>Abusing credits, subscriptions, ad-reward systems, reporting tools, block features, or moderation mechanisms.</li>
        </ul>`,

        `<h2>6. Subscriptions, Credits, and Digital Purchases</h2>
        <p>Chaput may offer certain digital features through subscriptions, single-use or multi-use credits, ad rewards, or similar digital-access models. The current code base indicates multiple credit types and subscription plans; the current product, price, currency, renewal period, and scope of benefits are governed by what is displayed in the app or relevant store interface.</p>
        <p>Apple billing may be used on iOS and Google Play billing may be used on Android. Third-party subscription-management infrastructure, such as RevenueCat, may be used as a service provider for purchase verification and entitlement syncing. For digital content, features, or benefits offered in the app, applicable store rules and these Terms apply together unless mandatory law requires otherwise.</p>
        <p>Consumed credits, used benefits, ad-earned entitlements, and transactions suspended for suspected abuse may be subject to additional review regarding refunds or restoration, subject to applicable law.</p>`,

        `<h2>7. Moderation and Enforcement</h2>
        <p>We reserve the right to warn, reduce visibility, hide, archive, remove, limit purchasing privileges, freeze an account, terminate access, invalidate device or account mappings, and impose permanent bans for content or conduct that violates our Community Guidelines, Content Moderation and Reporting Policy, or other product rules.</p>
        <p>If content is detected that may fall within the scope of Turkish Law No. 5816, or that is otherwise demeaning, abusive, insulting, profane toward, or implying insult or denigration of Gazi Mustafa Kemal Ataturk or his memory under our platform rules, the relevant content will be removed, the account will be permanently banned, and a complaint and/or report will be made to competent authorities.</p>
        <p>Complaints may be reviewed using both automated signals and human review. In serious cases, action may be taken without prior notice.</p>`,

        `<h2>8. Account Freeze, Deletion, and Termination</h2>
        <p>The inspected code shows account freeze, unfreeze, and permanent deletion flows. A freeze may end sessions or suspend access; it is not the same as account deletion.</p>
        <p>If you delete your account, data that is no longer necessary to provide the service may be erased, destroyed, or anonymized. Some data may nevertheless be retained longer for legal obligations, disputes, security investigations, fraud prevention, purchase refunds, or entitlement restoration records.</p>`,

        `<h2>9. Service Availability and Disclaimer</h2>
        <p>We do not guarantee that Chaput will be uninterrupted, error-free, or available at all times. Parts of the service may be suspended, changed, or discontinued due to maintenance, security, store approvals, third-party infrastructure outages, notification providers, payment systems, or changes in law.</p>
        <p>Your mandatory consumer rights remain reserved. Outside those rights, our liability for indirect damages, loss of profit, loss of reputation, or loss of data is limited to the maximum extent permitted by mandatory law.</p>`,

        `<h2>10. Governing Law and Contact</h2>
        <p>These Terms are governed by the laws of the Republic of Türkiye, without prejudice to mandatory consumer protection rules. Competent consumer arbitration committees, consumer courts, and mandatory statutory forums remain reserved for consumer disputes.</p>
        <p>You may contact us regarding these Terms at ${email}.</p>`,
      ],
    },
  },
  {
    slug: "privacy",
    tr: {
      title: "Gizlilik Politikası",
      description:
        "Chaput uygulamasında hesap, profil, içerik, satın alma, bildirim, moderasyon ve güvenlik verilerinin nasıl işlendiğini açıklar.",
      summary:
        "Bu Gizlilik Politikası, Chaput tarafından hangi verilerin işlendiğini, neden işlendiğini, kimlerle paylaşılabildiğini ve ne kadar süre saklanabildiğini açıklar.",
      blocks: [
        `<h2>1. Veri Sorumlusu ve Politikanın Kapsamı</h2>
        <p>Bu politika, Chaput mobil uygulaması, ${site.domain} alan adı altındaki sayfalar ve bunlarla bağlantılı destek, bildirim, moderasyon ve satın alma süreçleri için ${controllerRole} sıfatıyla hareket eden ${company} tarafından uygulanır. Bu kapsamda yetkili irtibat kişisi ${contactPerson}'dır.</p>
        <p>Bu politika; uygulama işlevleri, kullanıcı etkileşimleri, abonelikler, krediler, reklam ödülleri, raporlama ve hesap yönetimi kapsamında işlenen kişisel verileri kapsar. Uygulama mağazaları, ödeme arayüzleri veya üçüncü taraf sağlayıcılar kendi ayrı gizlilik metinlerini de uygulayabilir.</p>`,

        `<h2>2. İşlediğimiz Veri Kategorileri</h2>
        <ul>
          <li><strong>Hesap ve kimlik bilgileri:</strong> e-posta adresi, ad soyad, kullanıcı adı, doğum tarihi, avatar seçimi, profil fotoğrafı, biyografi, sosyal bağlantılar.</li>
          <li><strong>Kimlik doğrulama ve güvenlik verileri:</strong> doğrulama kodu kayıtları, uygulama içi cihaz tanımlayıcısı, oturum kayıtları, erişim ve yenileme belirteçleri, güvenlik ve kötüye kullanım önleme kayıtları.</li>
          <li><strong>Topluluk ve ilişki verileri:</strong> takip, takip isteği, engelleme, kısıtlama, kullanıcı arama, profil görüntüleme ve benzeri sosyal grafik verileri.</li>
          <li><strong>Kullanıcı içeriği ve etkileşim verileri:</strong> chaput başlatma kayıtları, mesajlar, fısıltılar, beğeniler, okuma bilgileri, görünüm kayıtları, ağaç üzerindeki düğüm konumları ve rapor içerikleri.</li>
          <li><strong>Satın alma ve hak verileri:</strong> abonelik planı, kredi bakiyeleri, ürün kimlikleri, işlem kimlikleri, satın alma doğrulama kayıtları, geri yükleme ve hak senkronizasyon kayıtları.</li>
          <li><strong>Bildirim ve cihaz verileri:</strong> push token, platform, uygulama içi bildirim kayıtları, bildirim okunma bilgileri.</li>
          <li><strong>Reklam ödülü ve kullanım verileri:</strong> ödüllü reklam izleme ve talep kayıtları, günlük sınırlar, ödül oturum kayıtları.</li>
          <li><strong>Web sitesi tercih verileri:</strong> landing page üzerinde kullanılıyorsa, karanlık mod gibi arayüz tercihlerini tutan gerekli tarayıcı yerel depolama kayıtları.</li>
        </ul>`,

        `<h2>3. Verileri Hangi Amaçlarla İşliyoruz?</h2>
        <ul>
          <li>Hesap açma, giriş, güvenlik ve oturum yönetimini sağlamak.</li>
          <li>Profil oluşturma, görünürlük tercihleri, takip ilişkileri ve chaput akışlarını çalıştırmak.</li>
          <li>Fısıltı, arşivleme, canlandırma, engelleme, kısıtlama ve raporlama gibi ürün işlevlerini sunmak.</li>
          <li>Satın alma doğrulama, abonelik yönetimi, kredi verme, kredi tüketimi, geri yükleme ve faturalandırma süreçlerini yürütmek.</li>
          <li>Push bildirimleri ve uygulama içi bildirimler göndermek.</li>
          <li>Kötüye kullanım, dolandırıcılık, spam, güvenlik ihlali ve topluluk kuralı ihlallerini tespit etmek, incelemek ve önlemek.</li>
          <li>Yasal taleplere cevap vermek, kayıt saklama yükümlülüklerini yerine getirmek ve uyuşmazlık yönetimi yapmak.</li>
          <li>Hizmetin performansını, istikrarını ve moderasyon süreçlerini sürdürmek.</li>
        </ul>`,

        `<h2>4. Verileri Kimlerle Paylaşabiliriz?</h2>
        <p>Kişisel verilerinizi satmıyoruz. Veriler, gerekli olduğu ölçüde ve amaçla sınırlı olmak üzere aşağıdaki alıcı gruplarıyla paylaşılabilir:</p>
        <ul>
          <li>Apple App Store ve Google Play gibi uygulama mağazaları ile ilgili ödeme ve abonelik altyapıları.</li>
          <li>RevenueCat gibi satın alma doğrulama veya abonelik/hak yönetim hizmet sağlayıcıları.</li>
          <li>Firebase Cloud Messaging gibi push bildirim altyapıları.</li>
          <li>Google Mobile Ads gibi reklam ve ödüllü reklam altyapıları.</li>
          <li>E-posta doğrulama ve bildirim süreçleri için e-posta hizmet sağlayıcıları veya SMTP altyapıları.</li>
          <li>Talimatlarımız doğrultusunda hareket eden teknik, destek, güvenlik veya moderasyon hizmet sağlayıcıları.</li>
          <li>Yetkili kamu kurum ve kuruluşları, mahkemeler, kolluk birimleri veya hukuken yetkili diğer merciler.</li>
        </ul>
        <p>Bu sağlayıcılardan bazılarının yurt dışında bulunması veya verilerin yurtdışı sistemlerde işlenmesi mümkündür. Böyle bir aktarım söz konusu olduğunda, yürürlükteki mevzuat uyarınca gerekli hukuki mekanizma, açık rıza veya diğer uygun aktarım şartları uygulanır.</p>`,

        `<h2>5. Kamusal İçerik, Fısıltılar ve Sınırlı Görünürlük Hakkında Önemli Bilgi</h2>
        <p>Chaput sosyal bir hizmettir. Bu nedenle profiliniz, chaput akışlarınız ve mesajlarınızın bir kısmı ürün tasarımına göre başka kullanıcılara görünür olabilir. Özel profil, hidden, secret, whisper veya benzeri işaretler; sadece o özellik için tasarlanmış görünürlük mantığını ifade eder.</p>
        <p>Bu etiketler hiçbir durumda mutlak gizlilik, tam anonimlik veya teknik olarak üçüncü kişilerce hiç erişilemeyeceği anlamına gelmez. Güvenlik, moderasyon, destek, hataların giderilmesi, saklama yükümlülükleri ve hukuki zorunluluklar nedeniyle içeriklere yetkili erişim mümkündür.</p>`,

        `<h2>6. Saklama Süreleri ve Silme</h2>
        <p>Verileri, toplama amacının gerektirdiği süre boyunca ve ilgili mevzuatın izin verdiği veya zorunlu kıldığı ölçüde saklarız. İncelenen kod tabanı, örneğin doğrulama kodu kayıtlarının kısa süreli, yenileme belirteci kayıtlarının ise sınırlı süreli tutulduğunu göstermektedir. Satın alma kayıtları, raporlar, güvenlik kayıtları ve hukuki uyuşmazlık verileri daha uzun süre saklanabilir.</p>
        <p>Uygulamada hesap dondurma ve kalıcı silme akışları bulunmaktadır. Kalıcı silme sonrasında hizmet için gerekli olmayan veriler silinebilir, yok edilebilir veya anonim hale getirilebilir. Bununla birlikte, satın alma haklarının geri yüklenmesi amacıyla sınırlı bir geri yükleme kaydının tutulması, hukuki yükümlülükler veya güvenlik gerekçeleriyle bazı kayıtların daha uzun süre saklanması mümkündür.</p>`,

        `<h2>7. Güvenlik</h2>
        <p>Makûl teknik ve idari güvenlik tedbirleri uygularız. Buna rağmen internet, e-posta, mobil ağlar, cihaz güvenliği ve üçüncü taraf altyapılar hiçbir zaman sıfır riskli değildir. Hesap güvenliğinizi korumak için e-posta erişiminizi, cihaz kilitlerinizi ve uygulama güncellemelerinizi güvenli tutmanız gerekir.</p>`,

        `<h2>8. Haklarınız ve İletişim</h2>
        <p>Uygulanabilir mevzuat kapsamında; verilerinize erişme, düzeltme, silme, işlenmesini sınırlama, itiraz etme, açık rızayı geri çekme ve şikâyette bulunma haklarına sahip olabilirsiniz. Türkiye'de bulunan kullanıcılar bakımından KVKK kapsamındaki detaylı haklar ayrıca KVKK Aydınlatma Metni'nde açıklanır.</p>
        <p>Bu politika veya veri işleme faaliyetlerimiz hakkında bizimle ${email} üzerinden iletişime geçebilirsiniz.</p>`,
      ],
    },
    en: {
      title: "Privacy Policy",
      description:
        "Explains how Chaput processes account, profile, content, purchase, notification, moderation, and security data.",
      summary:
        "This Privacy Policy explains what data Chaput processes, why it is processed, with whom it may be shared, and how long it may be retained.",
      blocks: [
        `<h2>1. Data Controller and Scope</h2>
        <p>This policy applies to the Chaput mobile application, pages under ${site.domain}, and related support, notification, moderation, and purchase processes operated by ${company} acting as the ${controllerRoleEn}. The authorized contact person for these processes is ${contactPerson}.</p>
        <p>This policy covers personal data processed for app functionality, user interactions, subscriptions, credits, ad rewards, reporting, and account management. App stores, payment interfaces, and third-party providers may also apply their own privacy notices.</p>`,

        `<h2>2. Categories of Data We Process</h2>
        <ul>
          <li><strong>Account and identity data:</strong> email address, full name, username, date of birth, avatar selection, profile photo, biography, and social links.</li>
          <li><strong>Authentication and security data:</strong> verification-code records, app-level device identifier, session records, access and refresh tokens, and abuse-prevention or security records.</li>
          <li><strong>Community and relationship data:</strong> follow data, follow requests, blocks, restrictions, user search, profile access, and similar social graph data.</li>
          <li><strong>User content and interaction data:</strong> chaput start records, messages, whispers, likes, read data, view records, node locations on the tree, and report content.</li>
          <li><strong>Purchase and entitlement data:</strong> subscription plan, credit balances, product identifiers, transaction identifiers, purchase-verification records, and restore or entitlement-sync data.</li>
          <li><strong>Notification and device data:</strong> push token, platform, in-app notification records, and notification read status.</li>
          <li><strong>Ad reward and usage data:</strong> rewarded-ad watch and claim records, daily limits, and reward-session records.</li>
          <li><strong>Website preference data:</strong> if used on the landing page, necessary browser local-storage records for interface preferences such as dark mode.</li>
        </ul>`,

        `<h2>3. Why We Process Data</h2>
        <ul>
          <li>To provide account creation, login, security, and session management.</li>
          <li>To operate profile creation, visibility choices, follow relationships, and chaput flows.</li>
          <li>To provide product features such as whispers, archiving, reviving, blocking, restricting, and reporting.</li>
          <li>To manage purchase verification, subscriptions, credits, credit consumption, restoration, and billing processes.</li>
          <li>To send push notifications and in-app notifications.</li>
          <li>To detect, investigate, and prevent abuse, fraud, spam, security incidents, and community-rule violations.</li>
          <li>To respond to legal requests, comply with recordkeeping duties, and manage disputes.</li>
          <li>To maintain service performance, stability, and moderation operations.</li>
        </ul>`,

        `<h2>4. Who We May Share Data With</h2>
        <p>We do not sell personal data. Data may be shared, only to the extent necessary and for the relevant purpose, with the following categories of recipients:</p>
        <ul>
          <li>App stores and related payment or subscription infrastructures, including Apple App Store and Google Play.</li>
          <li>Purchase-verification or subscription-management providers such as RevenueCat.</li>
          <li>Push-notification infrastructures such as Firebase Cloud Messaging.</li>
          <li>Advertising and rewarded-ad infrastructures such as Google Mobile Ads.</li>
          <li>Email service providers or SMTP infrastructures used for email verification and notices.</li>
          <li>Technical, support, security, or moderation providers acting under our instructions.</li>
          <li>Competent public authorities, courts, law-enforcement bodies, or other legally authorized recipients.</li>
        </ul>
        <p>Some of these providers may be located abroad or may process data in foreign systems. Where such transfers take place, we rely on the lawful transfer mechanism, explicit consent, or another appropriate legal condition required by applicable law.</p>`,

        `<h2>5. Important Notice About Public Content, Whispers, and Limited Visibility</h2>
        <p>Chaput is a social service. Part of your profile, chaput flows, and messages may therefore be visible to other users depending on the product design. A private profile, hidden, secret, whisper, or similar label only describes the visibility logic intended for that feature.</p>
        <p>These labels must not be understood as meaning absolute secrecy, full anonymity, or technical impossibility of third-party access. Authorized access may still occur for security, moderation, support, bug fixing, recordkeeping, and legal compliance.</p>`,

        `<h2>6. Retention and Deletion</h2>
        <p>We retain data for as long as necessary for the purpose of collection and to the extent permitted or required by law. The inspected code base indicates, for example, that verification-code records are short-lived, while refresh-token records are retained for a limited period. Purchase records, reports, security records, and legal-dispute data may be retained longer.</p>
        <p>The app includes account freeze and permanent deletion flows. After permanent deletion, data that is no longer needed for the service may be erased, destroyed, or anonymized. However, limited restore records may be retained to support entitlement restoration, and some records may be retained longer for legal or security reasons.</p>`,

        `<h2>7. Security</h2>
        <p>We apply reasonable technical and organizational safeguards. Even so, the internet, email, mobile networks, device security, and third-party infrastructures are never risk-free. You should keep your email access, device locks, and app updates secure to protect your account.</p>`,

        `<h2>8. Your Rights and Contact</h2>
        <p>Depending on applicable law, you may have rights to access, correct, delete, restrict processing, object, withdraw consent, and submit a complaint. For users in Türkiye, additional details regarding rights under the Personal Data Protection Law are explained in the KVKK Privacy Notice.</p>
        <p>You may contact us about this policy or our data-processing activities at ${email}.</p>`,
      ],
    },
  },
  {
    slug: "kvkk",
    tr: {
      title: "KVKK Aydınlatma Metni",
      description:
        "6698 sayılı Kanun kapsamında Chaput kullanıcılarına yönelik veri sorumlusu aydınlatma metni.",
      summary:
        "Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi uyarınca hazırlanmıştır.",
      blocks: [
        `<h2>1. Veri Sorumlusunun Kimliği</h2>
        <p>Bu aydınlatma metni, ${controllerRole} sıfatıyla hareket eden ${company}, ${address}, MERSİS No: ${mersis}, Vergi No: ${taxNo}, web sitesi: ${website} tarafından hazırlanmıştır. Yetkili irtibat kişisi ${contactPerson}'dır.</p>`,

        `<h2>2. İşlenen Kişisel Veriler</h2>
        <p>Chaput hizmeti kapsamında aşağıdaki veri kategorileri işlenebilmektedir: kimlik ve hesap verileri, iletişim verileri, profil verileri, kullanıcı içerikleri, sosyal grafik verileri, blokaj ve kısıtlama kayıtları, satın alma ve abonelik verileri, push bildirim verileri, teknik oturum ve güvenlik verileri, raporlama ve moderasyon verileri, reklam ödülü ve kullanım verileri.</p>`,

        `<h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
        <ul>
          <li>Üyelik, kimlik doğrulama, hesap güvenliği ve oturum yönetimini yürütmek.</li>
          <li>Profil, takip ilişkileri, chaput akışları, fısıltılar, arşivleme, canlandırma, engelleme ve kısıtlama özelliklerini sunmak.</li>
          <li>Bildirim, destek, şikâyet, raporlama ve moderasyon süreçlerini yürütmek.</li>
          <li>Abonelik, kredi, satın alma doğrulama, geri yükleme ve finansal kayıt süreçlerini işletmek.</li>
          <li>Hukuki yükümlülükleri yerine getirmek, güvenlik ihlallerini incelemek, dolandırıcılık ve kötüye kullanımı önlemek.</li>
        </ul>`,

        `<h2>4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebepleri</h2>
        <p>Kişisel veriler; mobil uygulama ekranları, hesap oluşturma ve giriş akışları, içerik oluşturma işlemleri, bildirim altyapıları, satın alma geri bildirimleri, destek başvuruları, raporlama ekranları, mağaza ve abonelik entegrasyonları, yükleme alanları ve teknik loglar üzerinden elektronik ortamda toplanabilir.</p>
        <p>Veri işleme, niteliğine göre KVKK m. 5/2(c) uyarınca sözleşmenin kurulması veya ifası için gerekli olması, m. 5/2(ç) uyarınca hukuki yükümlülüğün yerine getirilmesi, m. 5/2(e) uyarınca bir hakkın tesisi, kullanılması veya korunması, m. 5/2(f) uyarınca meşru menfaatlerimiz ve gerekli hallerde açık rıza hukuki sebebine dayanabilir.</p>`,

        `<h2>5. Kişisel Verilerin Aktarılabileceği Alıcı Grupları ve Aktarım Amaçları</h2>
        <p>Kişisel veriler; uygulama mağazaları, satın alma veya abonelik hizmet sağlayıcıları, push bildirim sağlayıcıları, e-posta sağlayıcıları, reklam ödülü altyapıları, destek ve moderasyon hizmet sağlayıcıları ile yetkili kamu kurum ve kuruluşlarına ilgili amaçlarla aktarılabilir.</p>
        <p>Yurtdışı aktarımı gereken hallerde, yürürlükteki hukuka göre gerekli aktarım şartları, açık rıza veya diğer hukuki mekanizmalar uygulanır.</p>`,

        `<h2>6. İlgili Kişinin Hakları</h2>
        <p>KVKK'nın 11. maddesi uyarınca ilgili kişi olarak;</p>
        <ul>
          <li>Kişisel verinizin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>İşleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
          <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme,</li>
          <li>KVKK m. 7 kapsamında silme veya yok etme talep etme,</li>
          <li>Düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
          <li>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
          <li>Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
        </ul>
        <p>haklarına sahipsiniz.</p>`,

        `<h2>7. Başvuru Usulü</h2>
        <p>Haklarınıza ilişkin başvurularınızı, yürürlükteki mevzuatta öngörülen yöntemlerle ${email} adresine veya ${address} adresine iletebilirsiniz. Başvurular, mevzuatta öngörülen süre içinde sonuçlandırılır.</p>`,
      ],
    },
    en: {
      title: "KVKK Privacy Notice",
      description:
        "Privacy notice prepared for Chaput users under Article 10 of Türkiye's Personal Data Protection Law No. 6698.",
      summary:
        "This privacy notice has been prepared pursuant to Article 10 of Türkiye's Personal Data Protection Law No. 6698.",
      blocks: [
        `<h2>1. Identity of the Data Controller</h2>
        <p>This privacy notice has been prepared by ${company}, ${address}, MERSIS No. ${mersis}, Tax No. ${taxNo}, website: ${website}, acting as the ${controllerRoleEn}. The authorized contact person is ${contactPerson}.</p>`,

        `<h2>2. Personal Data Processed</h2>
        <p>Within the scope of the Chaput service, the following categories of data may be processed: identity and account data, contact data, profile data, user content, social graph data, block and restriction records, purchase and subscription data, push notification data, technical session and security data, reporting and moderation data, and ad reward or usage data.</p>`,

        `<h2>3. Purposes of Processing</h2>
        <ul>
          <li>To manage membership, authentication, account security, and sessions.</li>
          <li>To provide profile, follow relationships, chaput flows, whispers, archiving, reviving, block, and restriction features.</li>
          <li>To handle notifications, support, complaints, reporting, and moderation processes.</li>
          <li>To operate subscriptions, credits, purchase verification, restoration, and financial recordkeeping.</li>
          <li>To comply with legal obligations, investigate security incidents, and prevent fraud and abuse.</li>
        </ul>`,

        `<h2>4. Method of Collection and Legal Grounds</h2>
        <p>Personal data may be collected electronically through mobile app screens, sign-up and login flows, content-creation actions, notification infrastructures, purchase feedback, support requests, reporting interfaces, store and subscription integrations, upload areas, and technical logs.</p>
        <p>Depending on the nature of the processing, legal grounds may include Article 5/2(c) of the Law (necessary for the establishment or performance of a contract), Article 5/2(ç) (necessary for compliance with legal obligations), Article 5/2(e) (necessary for the establishment, exercise, or protection of a right), Article 5/2(f) (necessary for our legitimate interests), and where required, explicit consent.</p>`,

        `<h2>5. Recipients and Purposes of Transfer</h2>
        <p>Personal data may be transferred, for the relevant purposes, to app stores, purchase or subscription service providers, push notification providers, email providers, ad reward infrastructures, support and moderation providers, and competent public authorities.</p>
        <p>Where cross-border transfers are necessary, the required transfer conditions, explicit consent, or other lawful transfer mechanisms under applicable law will be applied.</p>`,

        `<h2>6. Rights of the Data Subject</h2>
        <p>Under Article 11 of the Law, you may have the right to:</p>
        <ul>
          <li>Learn whether your personal data is processed.</li>
          <li>Request information if your personal data has been processed.</li>
          <li>Learn the purpose of processing and whether data is used in accordance with that purpose.</li>
          <li>Know the third parties to whom data is transferred domestically or abroad.</li>
          <li>Request correction of incomplete or inaccurate data.</li>
          <li>Request erasure or destruction under Article 7.</li>
          <li>Request notification of correction, deletion, or destruction to third parties to whom data has been transferred.</li>
          <li>Object to a result against you arising exclusively from automated analysis.</li>
          <li>Claim compensation for damages caused by unlawful processing.</li>
        </ul>`,

        `<h2>7. Application Method</h2>
        <p>You may submit requests regarding your rights through the methods permitted by applicable law to ${email} or ${address}. Requests will be answered within the statutory period.</p>`,
      ],
    },
  },
  {
    slug: "consent",
    tr: {
      title: "Açık Rıza Metni",
      description:
        "KVKK kapsamında, gerekli durumlarda yurtdışı veri aktarımı ve ticari iletişim için kullanılabilecek ayrı ve isteğe bağlı açık rıza metni.",
      summary:
        "Bu metin, aydınlatma metninden ayrı olarak ve işaret kutuları önceden seçili olmaksızın kullanılmak üzere hazırlanmış isteğe bağlı açık rıza taslağıdır.",
      blocks: [
        `<h2>1. Genel Esas</h2>
        <p>Bu açık rıza metni, KVKK Aydınlatma Metni'nden ayrı olarak sunulmalıdır. Açık rıza, hizmetin temel ifası için zorunlu olmayan işlemler bakımından alınmalı; önceden işaretli kutu, hizmetten yararlanmayı bütünüyle engelleyen dayatma veya belirsiz “battaniye rıza” şeklinde kullanılmamalıdır.</p>`,

        `<h2>2. Yurtdışı Aktarımı İçin Açık Rıza Metni</h2>
        <p>“KVKK Aydınlatma Metni'ni okudum. Chaput hizmetinin satın alma doğrulama, abonelik/hak yönetimi, push bildirimleri, teknik operasyon, güvenlik, dolandırıcılık önleme ve kullanıcı desteği süreçlerinin yürütülebilmesi amacıyla; kimlik, hesap, cihaz, bildirim, satın alma, kullanım ve kullanıcı içeriğiyle bağlantılı verilerimin, gerekli olması halinde Apple, Google, RevenueCat, Firebase Cloud Messaging ve benzeri yurtdışında yerleşik hizmet sağlayıcılara veya yurtdışındaki sistemlere aktarılmasına açık rıza veriyorum.”</p>`,

        `<h2>3. Ticari Elektronik İleti İçin Açık Rıza Metni</h2>
        <p>“KVKK Aydınlatma Metni'ni okudum. Kampanya, ürün güncellemesi, abonelik fırsatı, duyuru ve pazarlama içeriklerinin tarafıma e-posta, anlık bildirim, kısa mesaj veya benzeri elektronik iletişim kanalları üzerinden gönderilmesine açık rıza veriyorum.”</p>`,

        `<h2>4. Geri Alma ve Sonuçları</h2>
        <p>Açık rıza vermek zorunlu değildir. Açık rıza verdiğiniz işlemler için rızanızı istediğiniz zaman geri çekebilirsiniz. Rızanın geri alınması, geri alma tarihine kadar yapılmış işlemleri hukuka aykırı hale getirmez; ancak ilgili özelliğin çalışmasını kısmen veya tamamen etkileyebilir.</p>`,
      ],
    },
    en: {
      title: "Explicit Consent Text",
      description:
        "Optional explicit consent wording for cross-border transfers and commercial electronic messages, separate from the privacy notice.",
      summary:
        "This text is intended to be used separately from the privacy notice, with unticked checkboxes and only where explicit consent is actually required.",
      blocks: [
        `<h2>1. General Principle</h2>
        <p>This explicit consent text must be presented separately from the KVKK Privacy Notice. Explicit consent should be obtained only for processing that is not strictly necessary for the core performance of the service; it should not be bundled through pre-ticked boxes, forced acceptance, or vague blanket consent.</p>`,

        `<h2>2. Explicit Consent for Cross-Border Transfers</h2>
        <p>“I have read the KVKK Privacy Notice. I explicitly consent to the transfer, where necessary for purchase verification, subscription or entitlement management, push notifications, technical operations, security, fraud prevention, and user support, of my identity, account, device, notification, purchase, usage, and user-content-related data to Apple, Google, RevenueCat, Firebase Cloud Messaging, and similar service providers located abroad or to systems located abroad.”</p>`,

        `<h2>3. Explicit Consent for Commercial Electronic Messages</h2>
        <p>“I have read the KVKK Privacy Notice. I explicitly consent to receiving campaigns, product updates, subscription offers, announcements, and marketing communications by email, push notification, SMS, or similar electronic communication channels.”</p>`,

        `<h2>4. Withdrawal and Effect</h2>
        <p>Providing explicit consent is optional. You may withdraw your consent at any time for the processing activities for which you gave consent. Withdrawal does not retroactively invalidate prior processing, but it may partially or fully affect the operation of the relevant feature.</p>`,
      ],
    },
  },
  {
    slug: "community",
    tr: {
      title: "Topluluk Kuralları",
      description:
        "Chaput topluluğunda izin verilmeyen davranışlar, güvenli kullanım ilkeleri ve yaptırım çerçevesi.",
      summary:
        "Chaput, sosyal etkileşimi teşvik eder; ancak bunu güvenlik, saygı ve hesap verebilirlik temelinde yapmayı amaçlar.",
      blocks: [
        `<h2>1. Temel İlkeler</h2>
        <p>Chaput'ta başkalarıyla kurduğunuz her etkileşimde saygılı, dürüst ve güvenli davranmanız beklenir. Kullanıcılar, içeriklerinin ve davranışlarının gerçek kişiler üzerinde etkileri olabileceğini kabul eder.</p>`,

        `<h2>2. Yasak İçerik ve Davranışlar</h2>
        <ul>
          <li>Taciz, tehdit, zorbalık, ısrarlı rahatsız etme, nefret söylemi veya ayrımcılık.</li>
          <li>Çocukların cinsel istismarı, cinsel sömürü, çıplaklık istismarı veya çocuk güvenliğini tehlikeye atan her türlü içerik.</li>
          <li>Şiddet çağrısı, terör propagandası, suç işlemeye teşvik, dolandırıcılık veya kimlik sahteciliği.</li>
          <li>Mahrem görüntülerin izinsiz paylaşımı, kişisel verilerin ifşası, doxxing, stalking veya fiziksel güvenliği riske atan davranışlar.</li>
          <li>Gazi Mustafa Kemal Atatürk'e veya hatırasına yönelik, 5816 sayılı Atatürk Aleyhine İşlenen Suçlar Hakkında Kanun kapsamına girebilecek nitelikte ya da platform politikamız bakımından küçümseyici, hakaret içeren, sövme niteliğinde veya bu tür içerikleri ima eden; kullanıcı adı, profil adı, biyografi, resim, profil fotoğrafı, chaput, mesaj, fısıltı veya benzeri her türlü içerik.</li>
          <li>Spam, sahte etkileşim, otomasyon, manipülasyon veya reklam sistemlerinin suistimali.</li>
        </ul>`,

        `<h2>3. Görünürlük ve Güvenlik Uyarısı</h2>
        <p>Kamusal veya sınırlı görünürlüklü akışlarda paylaştığınız içerikler başkaları tarafından görülebilir, alıntılanabilir, raporlanabilir veya moderasyona konu olabilir. Fısıltı veya benzeri sınırlı görünürlük modlarında dahi mutlak gizlilik beklentisi oluşturmayın.</p>`,

        `<h2>4. Diğer Kullanıcılara Saygı</h2>
        <p>Bir kullanıcı sizinle etkileşim kurmak istemiyorsa, engelleme, kısıtlama veya takibi sonlandırma kararına saygı göstermelisiniz. Başka bir kullanıcının sınırlarını aşmaya dönük hesap yenileme, alternatif hesap açma veya teknik dolaşma girişimleri ihlal sayılabilir.</p>`,

        `<h2>5. Uygulama</h2>
        <p>İhlaller, görünürlük azaltma, içeriğin kaldırılması, erişim kısıtlaması, satın alma ayrıcalıklarının sınırlandırılması, hesabın dondurulması veya kalıcı yasak ile sonuçlanabilir. Ağır ihlaller yetkili mercilere bildirilebilir.</p>
        <p>Özellikle Gazi Mustafa Kemal Atatürk'e veya hatırasına yönelik yukarıdaki kapsamda içerik tespit edilmesi halinde ilgili hesap kalıcı olarak yasaklanır ve yetkili mercilere şikâyet ve/veya bildirimde bulunulur.</p>`,
      ],
    },
    en: {
      title: "Community Guidelines",
      description:
        "Rules for safe participation, prohibited conduct, and enforcement within the Chaput community.",
      summary:
        "Chaput encourages social interaction, but it is intended to operate on the basis of safety, respect, and accountability.",
      blocks: [
        `<h2>1. Core Principles</h2>
        <p>You are expected to act respectfully, honestly, and safely in every interaction on Chaput. Users are responsible for understanding that their content and behavior may affect real people.</p>`,

        `<h2>2. Prohibited Content and Conduct</h2>
        <ul>
          <li>Harassment, threats, bullying, persistent unwanted contact, hate speech, or discrimination.</li>
          <li>Child sexual abuse material, sexual exploitation, exploitative nudity, or any content that endangers children.</li>
          <li>Calls to violence, terrorist propaganda, incitement to crime, fraud, or identity deception.</li>
          <li>Non-consensual sharing of intimate imagery, disclosure of personal data, doxxing, stalking, or conduct that endangers physical safety.</li>
          <li>Usernames, profile names, biographies, images, profile photos, chaputs, messages, whispers, or any similar content that may fall within the scope of Turkish Law No. 5816, or that is otherwise demeaning, abusive, insulting, profane toward, or implying insult or denigration of Gazi Mustafa Kemal Ataturk or his memory under our platform rules.</li>
          <li>Spam, fake engagement, automation, manipulation, or abuse of advertising systems.</li>
        </ul>`,

        `<h2>3. Visibility and Safety Warning</h2>
        <p>Content shared in public or limited-visibility flows may be viewed, quoted, reported, or moderated by others. Even in whisper or similar limited-visibility modes, you should not assume absolute confidentiality.</p>`,

        `<h2>4. Respect for Other Users</h2>
        <p>If another user does not want to interact with you, you must respect their decision to block, restrict, or unfollow. Attempts to bypass another user's boundaries through account recycling, alternate accounts, or technical circumvention may be treated as violations.</p>`,

        `<h2>5. Enforcement</h2>
        <p>Violations may result in reduced visibility, removal of content, restricted access, limits on purchase privileges, account freeze, or permanent banning. Serious violations may be reported to competent authorities.</p>
        <p>In particular, if the above type of content regarding Gazi Mustafa Kemal Ataturk or his memory is detected, the relevant account will be permanently banned and a complaint and/or report will be made to competent authorities.</p>`,
      ],
    },
  },
  {
    slug: "moderation",
    tr: {
      title: "İçerik Moderasyon ve Şikâyet Politikası",
      description:
        "Chaput'ta raporlama, inceleme, müdahale, yaptırım ve kullanıcı güvenliği süreçlerinin nasıl işlediğini açıklar.",
      summary:
        "Chaput, kullanıcı güvenliği ve hukuka uyum amacıyla içerik moderasyonu ve şikâyet değerlendirme süreçleri yürütür.",
      blocks: [
        `<h2>1. Raporlama Araçları</h2>
        <p>İncelenen mobil kod, en azından chaput ve mesaj raporlama akışlarının uygulama içinde desteklendiğini; ayrıca engelleme ve kullanıcı kısıtlama işlevlerinin bulunduğunu göstermektedir. Backend altyapısında ilave rapor türleri de desteklenebilir; ilgili sürümde kullanıcıya açıldığı ölçüde bu politika aynı şekilde uygulanır.</p>`,

        `<h2>2. İnceleme Kriterleri</h2>
        <p>Bir içerik veya hesap; Topluluk Kuralları, Kullanıcı Sözleşmesi, mağaza kuralları, çocuk güvenliği yükümlülükleri, dolandırıcılık önleme ilkeleri ve hukuki yükümlülükler bakımından incelenebilir. İnceleme, rapor sebebi, tekrar eden ihlal örüntüsü, güvenlik riski ve teknik kayıtlar birlikte değerlendirilerek yapılabilir.</p>`,

        `<h2>3. Uygulanabilecek Önlemler</h2>
        <ul>
          <li>İçeriği gizleme, görünürlüğünü azaltma, arşivleme veya kaldırma.</li>
          <li>Mesaj, chaput, kredi veya satın alma özelliklerine geçici sınırlama getirme.</li>
          <li>Hesabı dondurma, oturumları sonlandırma veya kalıcı yasak uygulama.</li>
          <li>Gerekirse hesabı kara listeye alma ve yetkili mercilerle paylaşım yapma.</li>
        </ul>`,

        `<h2>4. Gizlilik İddiaları ve Moderasyon Yetkisi</h2>
        <p>Whisper, hidden veya benzeri görünürlük seçenekleri, moderasyon denetimini ortadan kaldırmaz. Güvenlik, moderasyon, dolandırıcılık önleme, destek ve hukuki zorunluluklar bakımından yetkili erişim mümkündür.</p>`,

        `<h2>5. Tekrarlayan veya Ağır İhlaller</h2>
        <p>Çocuk güvenliği ihlalleri, cinsel sömürü, şiddet tehdidi, örgütlü dolandırıcılık, yasa dışı içerik ve ciddi gizlilik ihlallerinde hesabınız ön bildirim olmaksızın kalıcı olarak kapatılabilir ve gerekli görüldüğünde ilgili otoriteler bilgilendirilebilir.</p>
        <p>Gazi Mustafa Kemal Atatürk'e veya hatırasına yönelik, 5816 sayılı Kanun kapsamına girebilecek nitelikte ya da platform politikamız bakımından küçümseyici, hakaret içeren, sövme niteliğinde veya bu tür içerikleri ima eden kullanıcı adı, profil alanı, görsel, chaput, mesaj, fısıltı veya benzeri içeriklerin tespit edilmesi halinde ilgili hesap kalıcı olarak yasaklanır ve yetkili mercilere şikâyet ve/veya bildirimde bulunulur.</p>`,

        `<h2>6. Başvuru ve İletişim</h2>
        <p>Moderasyon kararlarına ilişkin ek açıklama taleplerinizi ${email} üzerinden iletebilirsiniz. Her talebin kabul edileceği veya ayrıntılı delil paylaşılacağı garanti edilmez; güvenlik, üçüncü kişi hakları ve yürütülen soruşturmalar nedeniyle kapsam sınırlanabilir.</p>`,
      ],
    },
    en: {
      title: "Content Moderation and Reporting Policy",
      description:
        "Explains reporting, review, intervention, enforcement, and user-safety processes on Chaput.",
      summary:
        "Chaput operates content moderation and complaint-handling processes to protect users and comply with applicable law.",
      blocks: [
        `<h2>1. Reporting Tools</h2>
        <p>The inspected mobile code shows that at least chaput and message reporting flows are supported in the app, and that block and user-restriction features are available. The backend may support additional report types; this policy applies to those as well to the extent they are enabled in a given version.</p>`,

        `<h2>2. Review Criteria</h2>
        <p>Content or accounts may be reviewed against the Community Guidelines, Terms of Service, store policies, child-safety duties, anti-fraud principles, and legal obligations. Reviews may consider the report reason, repeat patterns of abuse, security risk, and relevant technical records.</p>`,

        `<h2>3. Possible Actions</h2>
        <ul>
          <li>Hide, de-rank, archive, or remove content.</li>
          <li>Temporarily limit messaging, chaput, credit, or purchase-related features.</li>
          <li>Freeze an account, end sessions, or impose a permanent ban.</li>
          <li>Where necessary, blacklist the account and cooperate with competent authorities.</li>
        </ul>`,

        `<h2>4. Visibility Labels and Moderation Access</h2>
        <p>Whisper, hidden, or similar visibility options do not prevent moderation review. Authorized access may still occur for safety, moderation, fraud prevention, support, and legal compliance.</p>`,

        `<h2>5. Repeat or Severe Violations</h2>
        <p>Child safety violations, sexual exploitation, threats of violence, organized fraud, illegal content, and serious privacy violations may result in permanent termination without prior notice, and relevant authorities may be informed where appropriate.</p>
        <p>If usernames, profile fields, images, chaputs, messages, whispers, or similar content are detected that may fall within the scope of Turkish Law No. 5816, or that are otherwise demeaning, abusive, insulting, profane toward, or implying insult or denigration of Gazi Mustafa Kemal Ataturk or his memory under our platform rules, the relevant account will be permanently banned and a complaint and/or report will be made to competent authorities.</p>`,

        `<h2>6. Requests and Contact</h2>
        <p>You may send requests for additional information regarding moderation decisions to ${email}. We do not guarantee that every request will be granted or that detailed evidence will be disclosed; security, third-party rights, and ongoing investigations may limit the scope of any response.</p>`,
      ],
    },
  },
  {
    slug: "subscriptions",
    tr: {
      title: "Abonelik ve Satın Alma Şartları",
      description:
        "Chaput abonelikleri, kredi türleri, dijital ürünler, otomatik yenileme, hakların verilmesi ve geri yükleme süreçleri.",
      summary:
        "Bu şartlar, Chaput içindeki dijital abonelikler, kredi ürünleri, reklam ödülleri ve satın alma doğrulama süreçleri için uygulanır.",
      blocks: [
        `<h2>1. Dijital Ürün Türleri</h2>
        <p>İncelenen kod tabanı, Chaput içinde yenilenen abonelik planları ile farklı işlevler için kullanılan kredi türleri bulunduğunu göstermektedir. Bunlar; chaput başlatma, gizli veya özel modlar, fısıltı, canlandırma veya benzeri ürün özellikleri için kullanılabilir. Uygulamada gösterilen ürün adı, kapsamı, fiyatı ve hak dönemi geçerlidir.</p>`,

        `<h2>2. Mağaza ve Ödeme Altyapısı</h2>
        <p>iOS işlemleri Apple App Store, Android işlemleri Google Play üzerinden yürütülebilir. Satın alma doğrulama ve hak eşleştirme için RevenueCat veya benzeri üçüncü taraf altyapılar hizmet sağlayıcı olarak kullanılabilir. Mağaza makbuzu, işlem kimliği, ürün kimliği ve benzeri kayıtlar hesabınızdaki hakların doğrulanması amacıyla işlenebilir.</p>`,

        `<h2>3. Abonelikler</h2>
        <p>Abonelikler, aksi belirtilmedikçe otomatik yenilenebilir. Abonelik fiyatı, yenileme periyodu, deneme süresi, indirimli dönemler ve plan avantajları mağaza satın alma ekranında gösterildiği gibidir. Aboneliğin iptal edilmemesi halinde sonraki dönem için tekrar ücret alınabilir.</p>`,

        `<h2>4. Kredi ve Tüketim Mantığı</h2>
        <p>Krediler veya tekil dijital haklar, ilgili özellik kullanıldığında tüketilebilir. Bir kredinin ne zaman harcandığı, uygulama mantığı ve backend doğrulama kayıtlarına göre belirlenir. Kullanılmış, harcanmış veya suiistimal edilmiş krediler yürürlükteki hukuk saklı kalmak kaydıyla otomatik olarak iade edilmeyebilir.</p>`,

        `<h2>5. Reklam Ödülleri ve Geri Yükleme</h2>
        <p>Belirli özellikler, ödüllü reklam izleme veya talep etme mekanizmalarıyla etkinleştirilebilir. Reklam ödülleri günlük sınırlar, doğrulama ve kötüye kullanım önleme kontrollerine tabi olabilir. Satın alma geri yükleme işlemleri ilgili mağaza hesabı, ürün tipi ve sistem kayıtlarına bağlıdır.</p>`,

        `<h2>6. Fiyatlar ve Değişiklikler</h2>
        <p>Fiyatlar, para birimi, vergi, mağaza dönüştürme oranları ve kampanyalar mağaza bölgenize göre değişebilir. Yeni satın almalar için fiyat ve avantajlarda değişiklik yapabiliriz. Mevcut abonelikler bakımından mağaza kuralları ve zorunlu hukuk hükümleri uygulanır.</p>`,

        `<h2>7. İletişim</h2>
        <p>Satın alma veya abonelik uyuşmazlıkları için önce ilgili mağaza hesabınızı ve makbuz kayıtlarınızı kontrol etmeniz önerilir. Bizimle ayrıca ${email} üzerinden iletişime geçebilirsiniz.</p>`,
      ],
    },
    en: {
      title: "Subscription and Purchase Terms",
      description:
        "Terms for Chaput subscriptions, credit products, digital goods, auto-renewal, entitlements, and purchase restoration.",
      summary:
        "These terms apply to digital subscriptions, credits, ad rewards, and purchase-verification processes within Chaput.",
      blocks: [
        `<h2>1. Types of Digital Products</h2>
        <p>The inspected code base indicates that Chaput offers recurring subscription plans and multiple credit types used for different features. These may apply to starting chaputs, hidden or special modes, whispers, revives, or similar product functionality. The product name, scope, price, and entitlement period shown in the app control the purchase.</p>`,

        `<h2>2. Store and Payment Infrastructure</h2>
        <p>iOS transactions may be processed through Apple App Store and Android transactions through Google Play. RevenueCat or similar third-party infrastructure may be used as a service provider for purchase verification and entitlement matching. Store receipts, transaction identifiers, product identifiers, and similar records may be processed to validate rights associated with your account.</p>`,

        `<h2>3. Subscriptions</h2>
        <p>Unless otherwise stated, subscriptions may auto-renew. Subscription price, renewal period, trial duration, introductory offers, and plan benefits are as shown in the relevant store purchase screen. If you do not cancel, you may be charged again for the next period.</p>`,

        `<h2>4. Credit and Consumption Logic</h2>
        <p>Credits or single-use digital entitlements may be consumed when the relevant feature is used. The moment at which a credit is deemed spent is determined by the app logic and backend verification records. Subject to applicable law, used, consumed, or abused credits may not be automatically refundable.</p>`,

        `<h2>5. Ad Rewards and Restoration</h2>
        <p>Certain features may be enabled through rewarded-ad watch or claim mechanisms. Ad rewards may be subject to daily limits, verification, and abuse-prevention controls. Purchase restoration depends on the relevant store account, product type, and system records.</p>`,

        `<h2>6. Pricing and Changes</h2>
        <p>Prices, currency, taxes, store conversion rates, and promotions may vary by storefront region. We may change pricing and benefits for new purchases. For existing subscriptions, store rules and mandatory law apply.</p>`,

        `<h2>7. Contact</h2>
        <p>For purchase or subscription issues, you should first review your applicable store account and receipt records. You may also contact us at ${email}.</p>`,
      ],
    },
  },
  {
    slug: "refunds",
    tr: {
      title: "İade ve İptal Politikası",
      description:
        "Chaput içi abonelik, kredi ve dijital satın almaların iptal ve iade esasları.",
      summary:
        "Bu politika, Chaput içindeki dijital satın almaların iptali ve iadesi bakımından izlenecek genel esasları açıklar.",
      blocks: [
        `<h2>1. Genel Kural</h2>
        <p>Chaput içindeki dijital abonelikler ve satın almalar çoğu durumda Apple App Store veya Google Play üzerinden gerçekleştirilir. Bu nedenle iptal, geri ödeme ve fatura süreçlerinde öncelikle ilgili mağazanın kullanıcı sözleşmesi, abonelik kuralları ve geri ödeme mekanizmaları uygulanır.</p>`,

        `<h2>2. Abonelik İptali</h2>
        <p>Otomatik yenilenen aboneliklerinizi ilgili mağaza hesabınızdan yönetebilir veya iptal edebilirsiniz. İptal, aksi zorunlu hukuk kuralı bulunmadıkça mevcut fatura döneminin sonunda hüküm doğurur ve dönem sonuna kadar erişim devam edebilir.</p>`,

        `<h2>3. Geri Ödeme Talepleri</h2>
        <p>Geri ödeme talepleri, satın almanın yapıldığı platform üzerinden veya zorunlu hukuk kurallarının izin verdiği ölçüde bize yöneltilebilir. Kullanılmış krediler, tüketilmiş avantajlar, aktive edilmiş tekil haklar ve ağır ihlal nedeniyle kapatılan hesaplarla bağlantılı işlemler ayrı değerlendirmeye tabi olabilir.</p>`,

        `<h2>4. Türk Tüketici Hukuku Bakımından Not</h2>
        <p>Dijital içerik veya dijital hizmetin ifasına, tüketicinin açık onayıyla derhal başlanması ve tüketicinin cayma hakkını kaybedebileceğine dair bilgilendirilmesi halinde cayma hakkı mevzuatın izin verdiği ölçüde sınırlanabilir. Bununla birlikte emredici tüketici mevzuatından doğan haklarınız saklıdır.</p>`,

        `<h2>5. Hatalı İşlemler ve Destek</h2>
        <p>Aynı işlemin birden fazla yansıması, etkinleşmeyen satın alma, yanlış hak tanımı veya doğrulama gecikmesi gibi durumlarda bizimle ${email} üzerinden iletişime geçebilirsiniz. İnceleme için mağaza makbuzu, işlem kimliği veya ekran görüntüsü istenebilir.</p>`,
      ],
    },
    en: {
      title: "Refund and Cancellation Policy",
      description:
        "General rules for cancellation and refunds of subscriptions, credits, and digital purchases in Chaput.",
      summary:
        "This policy explains the general framework for cancelling and refunding digital purchases within Chaput.",
      blocks: [
        `<h2>1. General Rule</h2>
        <p>Digital subscriptions and purchases in Chaput are generally processed through Apple App Store or Google Play. Accordingly, cancellation, refund, and billing processes are primarily governed by the relevant store's user agreement, subscription rules, and refund mechanisms.</p>`,

        `<h2>2. Subscription Cancellation</h2>
        <p>You may manage or cancel auto-renewing subscriptions through your applicable store account. Unless mandatory law requires otherwise, cancellation takes effect at the end of the current billing period and access may continue until that period ends.</p>`,

        `<h2>3. Refund Requests</h2>
        <p>Refund requests may be directed through the platform on which the purchase was made, or to us to the extent allowed by mandatory law. Used credits, consumed benefits, activated one-time entitlements, and transactions associated with accounts terminated for serious violations may require separate review.</p>`,

        `<h2>4. Note Regarding Turkish Consumer Law</h2>
        <p>If performance of digital content or a digital service begins immediately upon the consumer's express consent and acknowledgement that the right of withdrawal may be lost, the right of withdrawal may be limited to the extent permitted by law. Mandatory consumer rights nevertheless remain reserved.</p>`,

        `<h2>5. Errors and Support</h2>
        <p>If you experience duplicate charges, an unactivated purchase, misapplied entitlements, or verification delays, you may contact us at ${email}. We may request the store receipt, transaction identifier, or screenshots for review.</p>`,
      ],
    },
  },
  {
    slug: "ugc",
    tr: {
      title: "Kullanıcı İçeriği Politikası",
      description:
        "Chaput'ta kullanıcıların oluşturduğu içeriklerin sahipliği, görünürlüğü, lisansı, kaldırılması ve sorumluluk esasları.",
      summary:
        "Bu politika, Chaput üzerinde oluşturulan içeriklerin nasıl ele alındığını ve hangi kurallara tabi olduğunu açıklar.",
      blocks: [
        `<h2>1. Kullanıcı İçeriği Nedir?</h2>
        <p>Kullanıcı içeriği; profil adı, kullanıcı adı, biyografi, profil fotoğrafı, sosyal bağlantılar, chaput mesajları, cevaplar, fısıltılar, beğeniler, rapor açıklamaları ve uygulama içinde kullanıcı tarafından girilen diğer içerikleri kapsar.</p>`,

        `<h2>2. Sorumluluk</h2>
        <p>Paylaştığınız içeriğin hukuka uygunluğundan, doğruluğundan ve başkalarının haklarını ihlal etmemesinden siz sorumlusunuz. Chaput, kullanıcı içeriklerinin tamamını önceden kontrol etmekle yükümlü değildir; ancak ihlal tespiti halinde müdahale edebilir.</p>`,

        `<h2>3. Görünürlük ve Kamusallık</h2>
        <p>İçeriğinizin görünürlüğü, profilinizin ve ilgili özelliğin ürün kurallarına göre değişebilir. Kamusal akışlarda paylaşılan veya görünür hale gelen içerik, diğer kullanıcılar tarafından okunabilir, alıntılanabilir, şikâyet edilebilir veya platform dışına taşınabilir. Whisper benzeri sınırlı görünürlük modlarında bile mutlak gizlilik garanti edilmez.</p>`,

        `<h2>4. Lisans ve Kullanım Yetkisi</h2>
        <p>Hizmeti işletmek, görüntülemek, depolamak, moderasyon uygulamak, raporları incelemek ve hukuki yükümlülüklere cevap vermek amacıyla içeriğiniz üzerinde Kullanıcı Sözleşmesi'nde belirtilen sınırlı kullanım lisansını bize verirsiniz.</p>`,

        `<h2>5. Kaldırma ve Silme</h2>
        <p>Topluluk Kuralları'na veya hukuka aykırı olduğu değerlendirilen içerikler kaldırılabilir, gizlenebilir, arşivlenebilir veya erişimi kısıtlanabilir. Hesabınızı silmeniz, ilgili teknik ve hukuki saklama sınırları dahilinde içeriğinizin tamamının anında her ortamdan yok olacağı anlamına gelmez.</p>`,
      ],
    },
    en: {
      title: "User Generated Content Policy",
      description:
        "Ownership, visibility, licensing, removal, and responsibility rules for user-generated content on Chaput.",
      summary:
        "This policy explains how user-generated content is handled on Chaput and the rules that apply to it.",
      blocks: [
        `<h2>1. What Is User Content?</h2>
        <p>User content includes profile name, username, biography, profile photo, social links, chaput messages, replies, whispers, likes, report details, and other content entered by a user in the app.</p>`,

        `<h2>2. Responsibility</h2>
        <p>You are responsible for ensuring that your content is lawful, accurate, and does not infringe the rights of others. Chaput is not required to pre-screen all user content, but may intervene where a violation is detected.</p>`,

        `<h2>3. Visibility and Public Nature</h2>
        <p>The visibility of your content may vary according to your profile settings and the rules of the relevant feature. Content shared or made visible in public flows may be read, quoted, reported, or copied outside the platform by other users. Even in whisper-like limited-visibility modes, absolute confidentiality is not guaranteed.</p>`,

        `<h2>4. License and Permission</h2>
        <p>To operate, display, store, moderate, review reports, and respond to legal obligations, you grant us the limited license described in the Terms of Service with respect to your content.</p>`,

        `<h2>5. Removal and Deletion</h2>
        <p>Content considered to violate the Community Guidelines or the law may be removed, hidden, archived, or access-restricted. Deleting your account does not mean every copy of your content disappears instantly from every medium, particularly within technical retention and legal retention boundaries.</p>`,
      ],
    },
  },
  {
    slug: "deletion",
    tr: {
      title: "Hesap Silme ve Veri Silme Politikası",
      description:
        "Chaput hesabının dondurulması, kalıcı silinmesi ve verilerin saklama-imha süreçleri.",
      summary:
        "Bu politika, hesap dondurma, kalıcı hesap silme ve kişisel verilerin silinmesi veya saklanmasıyla ilgili çerçeveyi açıklar.",
      blocks: [
        `<h2>1. Hesap Dondurma ve Hesap Silme Arasındaki Fark</h2>
        <p>Hesap dondurma; erişimin askıya alınması, oturumların kapatılması veya hesabın geçici olarak pasif hale getirilmesi sonucunu doğurabilir. Hesap silme ise, hesabın kalıcı olarak sonlandırılmasını ve ilgili veri işleme amaçlarının gözden geçirilmesini ifade eder.</p>`,

        `<h2>2. Hesap Silme Talebi</h2>
        <p>İncelenen uygulama kodu, hesap silme akışının uygulama içinde mevcut olduğunu göstermektedir. Ayrıca gerekli hallerde ${email} üzerinden destek talebi de iletebilirsiniz. Kimlik doğrulama, kötüye kullanım önleme ve yasal kayıt incelemesi için ek bilgi istenebilir.</p>`,

        `<h2>3. Silinebilecek Veriler</h2>
        <p>Uygun olduğu ölçüde; profil verileri, takip ilişkileri, blok kayıtları, bildirim kayıtları, push token kayıtları, chaput mesajları, mesaj beğenileri, görünüm kayıtları, satın alma dışı uygulama kayıtları ve yüklenen profil fotoğrafı dosyaları silinebilir veya sistemden çıkarılabilir.</p>`,

        `<h2>4. Saklanabilecek Veriler</h2>
        <p>Aşağıdaki veriler, yalnızca gerekli ve ölçülü olduğu sürece saklanabilir:</p>
        <ul>
          <li>Hukuki yükümlülükler, denetimler veya uyuşmazlıklar için gereken kayıtlar.</li>
          <li>Dolandırıcılık, spam, hesap suistimali, güvenlik incelemesi veya kara liste süreçleri için gerekli güvenlik kayıtları.</li>
          <li>Satın alma iadesi, mağaza itirazı veya abonelik haklarının geri yüklenmesi için gerekli sınırlı mali kayıtlar veya restore snapshot verileri.</li>
          <li>Yedekleme döngülerinde geçici olarak kalmaya devam eden teknik kayıtlar.</li>
        </ul>`,

        `<h2>5. Süre ve Sonuç</h2>
        <p>Silme talebinin işlenme süresi, hesabın durumu, açık şikâyetler, ödeme uyuşmazlıkları, kötüye kullanım incelemeleri ve mevzuat gerekliliklerine göre değişebilir. Silme sonrasında hizmete erişim sona erer; geri dönüş imkânı her zaman bulunmayabilir.</p>`,
      ],
    },
    en: {
      title: "Account and Data Deletion Policy",
      description:
        "Framework for account freeze, permanent account deletion, and the retention or erasure of data on Chaput.",
      summary:
        "This policy explains the framework for account freeze, permanent account deletion, and the erasure or retention of personal data.",
      blocks: [
        `<h2>1. Difference Between Account Freeze and Account Deletion</h2>
        <p>An account freeze may suspend access, end sessions, or make the account temporarily inactive. Account deletion refers to permanently terminating the account and reassessing the data-processing purposes associated with it.</p>`,

        `<h2>2. Requesting Deletion</h2>
        <p>The inspected app code indicates that an account deletion flow exists in the app. Where necessary, you may also contact support at ${email}. We may request additional information for identity verification, abuse prevention, or legal record review.</p>`,

        `<h2>3. Data That May Be Deleted</h2>
        <p>Where appropriate, profile data, follow relationships, block records, notification records, push token records, chaput messages, message likes, view records, non-purchase application records, and uploaded profile photo files may be deleted or removed from the system.</p>`,

        `<h2>4. Data That May Be Retained</h2>
        <p>The following data may be retained only for as long as necessary and proportionate:</p>
        <ul>
          <li>Records required for legal obligations, audits, or disputes.</li>
          <li>Security records needed for fraud, spam, account abuse, security review, or blacklist processes.</li>
          <li>Limited financial records or restore snapshot data needed for refunds, store disputes, or restoration of subscription entitlements.</li>
          <li>Technical records that remain temporarily within backup cycles.</li>
        </ul>`,

        `<h2>5. Timing and Effect</h2>
        <p>The time required to process a deletion request may vary depending on account status, open complaints, payment disputes, abuse investigations, and legal requirements. After deletion, access to the service ends and restoration may not always be available.</p>`,
      ],
    },
  },
  {
    slug: "children",
    tr: {
      title: "Çocukların Gizliliği Bildirimi",
      description:
        "Chaput'un yaş sınırı, çocukların verilerinin korunması ve ebeveyn/veli başvuru süreçleri.",
      summary:
        "Chaput genel kullanım için 13 yaş altındaki çocuklara yönelik tasarlanmamıştır.",
      blocks: [
        `<h2>1. Yaş Sınırı</h2>
        <p>İncelenen kod tabanı, doğum tarihi kontrolleri üzerinden 13 yaş altındaki kullanıcıların hesap oluşturmasının veya profilini tamamlamasının engellendiğini göstermektedir. Yerel hukuk daha yüksek bir yaş sınırı gerektiriyorsa o sınır uygulanmalıdır.</p>`,

        `<h2>2. Bilerek Veri Toplamama İlkesi</h2>
        <p>13 yaş altındaki çocuklardan bilerek kişisel veri toplamayı amaçlamıyoruz. Böyle bir hesabın oluşturulduğunu, yanlış yaş beyanı verildiğini veya çocuk güvenliğini tehlikeye atan bir kullanım bulunduğunu öğrenirsek hesabı askıya alabilir, silebilir ve gerekli güvenlik adımlarını atabiliriz.</p>`,

        `<h2>3. Ebeveyn veya Veli Başvuruları</h2>
        <p>Bir ebeveyn veya yasal veli, çocuğa ait verilerin sistemlerimizde işlendiğini düşünüyorsa ${email} üzerinden bizimle iletişime geçebilir. Doğrulama sonrasında hesap kaldırma veya veri inceleme süreçleri yürütülebilir.</p>`,
      ],
    },
    en: {
      title: "Children's Privacy Notice",
      description:
        "Chaput's age threshold, child data handling principles, and parent or guardian request process.",
      summary:
        "Chaput is not designed for general use by children under 13.",
      blocks: [
        `<h2>1. Age Threshold</h2>
        <p>The inspected code base indicates that users under 13 are prevented from creating or completing an account through date-of-birth checks. If local law requires a higher minimum age, that higher threshold should apply.</p>`,

        `<h2>2. No Knowing Collection from Children Under 13</h2>
        <p>We do not intend to knowingly collect personal data from children under 13. If we learn that such an account has been created, that an age has been misstated, or that child safety is at risk, we may suspend or delete the account and take necessary safety steps.</p>`,

        `<h2>3. Parent or Guardian Requests</h2>
        <p>If a parent or legal guardian believes that a child's data is being processed in our systems, they may contact us at ${email}. After verification, we may review the account and proceed with removal or related data-handling measures.</p>`,
      ],
    },
  },
  {
    slug: "store-privacy",
    tr: {
      title: "App Store / Google Play Kısa Privacy Disclosure Metinleri",
      description:
        "Mağaza listelemeleri, veri güvenliği formları ve kısa gizlilik açıklamaları için kullanılabilecek özet metinler.",
      summary:
        "Bu metinler, mağaza listelemeleri ve kısa ürün açıklamaları için özet nitelikli gizlilik beyanlarıdır; tam açıklama için Gizlilik Politikası ve KVKK Aydınlatma Metni esas alınmalıdır.",
      blocks: [
        `<h2>1. Kısa Genel Açıklama</h2>
        <p>“Chaput; hesap oluşturma, profil yönetimi, chaput ve mesaj akışlarını çalıştırma, güvenlik, moderasyon, bildirim ve satın alma süreçleri için e-posta, profil bilgileri, kullanıcı içeriği, uygulama içi cihaz tanımlayıcısı, push token, satın alma ve kullanım kayıtlarını işleyebilir. Halka açık veya sınırlı görünürlüklü içerikler, ürün kurallarına göre başka kullanıcılar tarafından görülebilir. Veriler; mağaza faturalandırması, abonelik yönetimi, push bildirimleri ve reklam ödülü altyapıları gibi hizmet sağlayıcılarla gerekli ölçüde paylaşılabilir. Chaput kişisel verileri satmaz.”</p>`,

        `<h2>2. App Store Kısa Metni</h2>
        <p>“Collected data may include email address, profile details, user content, app-level device identifiers, notification tokens, purchase records, and safety or moderation records. Data is used for account management, app functionality, public or limited-visibility social interactions, purchase validation, notifications, safety, and abuse prevention. Certain data may be shared with Apple, Google, RevenueCat, push notification providers, and ad reward providers as needed to operate the service. Data is not sold.”</p>`,

        `<h2>3. Google Play Kısa Metni</h2>
        <p>“Chaput may collect personal and app activity data such as email, profile information, user-generated content, device/session identifiers, push token, purchase and subscription records, reports, and rewarded ad event records. This data supports core app functionality, security, moderation, subscriptions, notifications, and abuse prevention. Public content may be visible to other users depending on your settings and the product design. Full details are available in the Privacy Policy.”</p>`,
      ],
    },
    en: {
      title: "App Store / Google Play Short Privacy Disclosures",
      description:
        "Short privacy summaries for store listings, data safety forms, and brief product disclosures.",
      summary:
        "These texts are short-form privacy disclosures for store listings and brief product notices. The Privacy Policy and KVKK Privacy Notice remain the authoritative documents.",
      blocks: [
        `<h2>1. Short General Disclosure</h2>
        <p>“Chaput may process email, profile information, user content, app-level device identifiers, push token, purchase records, and usage records in order to provide account management, profile features, chaput and message flows, security, moderation, notifications, and purchase processes. Public or limited-visibility content may be visible to other users according to product rules. Data may be shared as necessary with service providers used for store billing, subscription management, push notifications, and rewarded advertising infrastructure. Chaput does not sell personal data.”</p>`,

        `<h2>2. App Store Short Text</h2>
        <p>“Collected data may include email address, profile details, user content, app-level device identifiers, notification tokens, purchase records, and safety or moderation records. Data is used for account management, app functionality, public or limited-visibility social interactions, purchase validation, notifications, safety, and abuse prevention. Certain data may be shared with Apple, Google, RevenueCat, push notification providers, and ad reward providers as needed to operate the service. Data is not sold.”</p>`,

        `<h2>3. Google Play Short Text</h2>
        <p>“Chaput may collect personal and app activity data such as email, profile information, user-generated content, device/session identifiers, push token, purchase and subscription records, reports, and rewarded ad event records. This data supports core app functionality, security, moderation, subscriptions, notifications, and abuse prevention. Public content may be visible to other users depending on your settings and the product design. Full details are available in the Privacy Policy.”</p>`,
      ],
    },
  },
];
