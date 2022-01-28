# **SQL ve NoSQL arasındaki farklar**

## **SQL ve NoSQL arasındaki fark nasıl anlaşılır?**

Sakinleri sadece bir dil konuşan bir şehir düşünün. Bu şehirdeki her şey tek bir iletişim yolu etrafında inşa edilmiştir. Yani, belirli bir dil, sakinlerin çevrelerindeki dünyayı anlamalarının ve onunla etkileşime girmelerinin tek yoludur. Dil bir yerde değişirse şehirdeki tüm süreçleri karıştırır ve yok eder.

Şimdi her evin kendi dilini konuşabildiği tamamen farklı bir şehir hayal edin. Bu şehirdeki her insan dünyayla farklı bir şekilde etkileşime giriyor ve bu kimseyi etkilemiyor.

Bu benzetilmiş durum, SQL (ilişkisel) ve NoSQL (ilişkisel olmayan) veritabanları arasındaki temel farklılıklardan birinin gösterilmesine yardımcı olur. Şimdi daha derine bakalım:



<p align="center">
  <img src="https://learnsql.com/blog/sql-vs-mongo-query/mongodb-queries-vs-mysql-queries-4.png" alt="SQL vs NoSQL"/>
</p>



---
## **SQL veritabanları**

SQL veritabanları, verileri tanımlamak ve işlemek için Yapılandırılmış Sorgu Dili kullanır. SQL, en çok yönlü ve yaygın olarak kullanılan seçeneklerden biridir ve özellikle karmaşık sorgular için çok uygundur ve güvenliği garanti eder. Ancak, verilerinizin yapısını onunla çalışmadan önce tanımlamak için önceden tanımlanmış şemaları kullanmanızı gerektirdiğinden kısıtlayıcı olabilir. Tüm verilerinizin aynı yapıya sahip olması gerekir, bu da çok fazla ön hazırlık gerektirebilir ve ilk şehirde olduğu gibi yapıdaki herhangi bir değişiklik karmaşık ve tüm sisteminiz için yıkıcı olacaktır.

---
## **NoSQL veritabanları**

NoSQL veritabanları, aksine, yapılandırılmamış veriler için dinamik şemalara sahiptir. Veriler burada çeşitli şekillerde depolanır: sütun yönelimli, belge yönelimli, grafik temelli veya KeyValue deposu olarak organize edilmiş olabilir. Bu esneklik şu anlama gelir:

- Önce yapılarını tanımlamadan belgeler oluşturabilirsiniz
- Her belgenin kendine özgü yapısı olabilir
- Sözdizimi veritabanından veritabanına değişebilir
- İstediğiniz zaman yeni alanlar ekleyebilirsiniz

## **SQL vs NoSQL: karşılaştırma**
| Parametre | SQL     | NoSQL|
| ------| ----- | ----------- |
| *Tanım*|SQL veritabanlarına öncelikle RDBMS veya ilişkisel veritabanları denir.  | NoSQL veritabanlarına öncelikle ilişkisel olmayan veya dağıtılmış veritabanları denir.      |
| *Sorgu dili*|Yapılandırılmış Sorgu Dili (SQL)  | Bildirime dayalı sorgu dili yok      |
| *Tipi* |SQL veritabanları tablo tabanlı veritabanlarıdır  | NoSQL veritabanları belgelere, anahtar/değer çiftlerine, grafik veritabanlarına dayalı olabilir.   |
| *Şema*|SQL veritabanlarının önceden tanımlanmış bir şeması vardır  | NoSQL veritabanları, yapılandırılmamış veriler için dinamik şema kullanır.     |
| *Ölçeklenebilirlik*|SQL veritabanları dikey olarak ölçeklenebilir. Tek bir sunucu üzerinde donanım kapasitesini (CPU, RAM, SSD vb.) Artırarak ölçeklenebilirler.  | NoSQL veritabanları yatay olarak ölçeklenebilir. Büyük yükü yönetmek ve yığını azaltmak için altyapıya daha fazla sunucu eklenerek ölçeklenebilirler.      |
| *Hiyerarşik veri depolama*|SQL veritabanları hiyerarşik veri depolama için uygun değildir.  |Anahtar/değer çifti yöntemini desteklediğinden, hiyerarşik bir veri deposu için daha uygundur.     |
| *Tasarım*|Geleneksel bir DBMS, daha fazla anlamak için verileri ayrıştırmak ve almak için SQL sözdizimini ve sorguları kullanır. OLAP sistemleri için kullanılırlar.  | NoSQL veritabanı sistemi, çeşitli veritabanı teknolojilerinden oluşur. Bu veritabanları, modern uygulama geliştirme taleplerine yanıt olarak geliştirilmiştir.      |
| *Geliştirme yılı*|Düz dosya depolama ile ilgili sorunları çözmek için 1970'lerde geliştirilmiştir.  | SQL veritabanlarının sorunlarının ve sınırlamalarının üstesinden gelmek için 2000'lerin sonlarında geliştirildi.      |
| *Açık kaynak*|Postgres & MySQL gibi açık kaynak ve Oracle Database gibi ticari birleşim.  | Açık kaynak kod   |
| *Tutarlılık*|Bu, güçlü bir tutarlılık için ayarlanmalıdır.  | Bazıları MongoDB gibi güçlü tutarlılık sunarken diğerleri yalnızca Cassandra gibi nihai tutarlılık sunduğundan DBMS'ye bağlıdır.      |
| *En iyi seçenek*|RDBMS veritabanı, ACID sorunlarını çözmek için doğru seçenektir,SQL veritabanları satır ve sütunlar biçiminde tablo tabanlıdır ve standart şema tanımlarına kesinlikle uymalıdır. Çok sıralı işlemlere ihtiyaç duyan uygulamalar için daha iyi bir seçenektir.| NoSQL, veri kullanılabilirliği sorunlarını çözmek için en uygun olanıdır,eritabanları belgelere, anahtar / değer çiftlerine, grafiklere veya sütunlara dayalı olabilir ve standart şema tanımlarına bağlı kalmaları gerekmez.      |
| *Maliyeti* |Ölçeklendirme maliyeti yüksektir.  | İlişkisel veritabanlarına kıyasla ölçeklendirmek daha ucuzdur.      |
| *Kullanımı*|SQL, sorguları işlemek için standart bir arayüze sahip olduğundan karmaşık sorgular için iyi bir seçimdir. Yüksek işlem tabanlı uygulamalar için en uygun çözüm.  | NoSQL'de sorguları işlemek için standart bir arayüz olmadığından karmaşık sorgular için uygun değildir. NoSQL'deki sorgular SQL sorguları kadar güçlü değildir. NoSQL'i yoğun işlem amaçlı kullanabilirsiniz. Ancak bunun için en uygun seçenek değil.       |
| *Donanım*|Özel veritabanı ekipmanı (Oracle Exadata, vb.)  |Ticari ekipman    |
| En iyi özellikler|Platformlar arası destek, Güvenli ve ücretsiz  |Kullanımı kolay, yüksek performanslı ve esnek alet.   |
| *Örnekler*|Oracle, Postgres ve MS-SQL.  | MongoDB, Redis, Neo4j, Cassandra, Hbase. |

