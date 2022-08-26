<script>
    import DashboardWidget from "../lib/components/DashboardWidget.svelte";
    import FaSolidCoins from "svelte-icons-pack/fa/FaSolidCoins";
    import FaSolidFlagCheckered from "svelte-icons-pack/fa/FaSolidFlagCheckered";
    import BsCalendar2HeartFill from "svelte-icons-pack/bs/BsCalendar2HeartFill";
    import SiGoogleclassroom from "svelte-icons-pack/si/SiGoogleclassroom";

    const dashboardWidgets = [
        {
            icon: FaSolidFlagCheckered,
            title: "Classes Completed",
            number: 10,
            color: "#53A548",
        },
        {
            icon: SiGoogleclassroom,
            title: "Upcoming Classes",
            number: 2,
            color: "#493657",
        },
        {
            icon: FaSolidCoins,
            title: "Wallet (coins)",
            number: 100,
            color: "#F7B32B",
        },
        {
            icon: BsCalendar2HeartFill,
            title: "Streak (days)",
            number: 20,
            color: "#F2B5D4",
        },
    ];
</script>

<!-- Banner -->
<div id="dashboard" class="uk-card uk-card-default uk-card-body">
    <p class="uk-text-lead">Hello Shubhendu!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<!-- Widgets -->
<div class="uk-container uk-container-xlarge">
    <div
        class="widgets uk-grid-match uk-grid-column-small uk-grid-row-large uk-child-width-1-4@s uk-child-width-1-2 uk-margin-small-top"
        uk-grid
    >
        {#each dashboardWidgets as widget}
            <DashboardWidget {...widget} />
        {/each}
    </div>
</div>
Dashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi
enim natus earum, minus labore reiciendis distinctio doloremque porro officia ea
minima vero perspiciatis? Nostrum perspiciatis tempore nobis quaerat sed, culpa voluptatibus
ipsum illum quas tenetur cum magni sequi nemo sit! Aliquam impedit ipsam quidem consequuntur,
sed itaque rerum nostrum laborum modi hic eius cum minima alias fugit saepe. Sed
aliquam delectus ducimus neque, tempore nisi nulla similique rerum ipsum laudantium
nihil consectetur doloribus, officiis exercitationem at obcaecati. Laborum, suscipit
ea. Esse quas dolor animi possimus quia molestiae voluptates itaque odit quasi voluptatum
a molestias culpa ratione nisi repellat libero nulla laboriosam, nemo vel. Numquam
iste quas explicabo similique ex inventore consectetur in ducimus commodi neque quia
eos soluta asperiores perspiciatis, sit maxime, saepe dolore. Praesentium impedit
deserunt laboriosam ipsum repellendus? Harum, explicabo. Unde quas ex hic explicabo
laudantium voluptatum quia delectus facilis dolor expedita commodi harum, asperiores
temporibus, minus quos aliquam? Cupiditate cum rerum dignissimos quasi beatae hic
atque saepe placeat! Deleniti non quos corrupti eveniet expedita! Libero exercitationem
repellendus mollitia enim dolores qui architecto, expedita praesentium cumque, ea
officiis nisi veniam pariatur quidem repudiandae dicta accusamus explicabo? Sapiente
dignissimos voluptatibus enim, alias blanditiis, odio veritatis magni voluptatum
hic possimus ea nihil exercitationem dolor eveniet commodi rem sit sunt. Hic maxime
quis amet! Dolorum possimus porro debitis amet dolores. Amet harum id odit nulla
quas eius voluptatibus asperiores cum, dignissimos corporis vitae quis tenetur sit
quaerat animi cupiditate. Animi deserunt natus, id perspiciatis voluptate, laborum
esse expedita incidunt, molestiae iure rerum suscipit. Et repellendus vel, facere
sed saepe maiores eligendi quisquam a dolore! Iste aliquam quae explicabo molestiae
maiores totam laboriosam nostrum aliquid recusandae blanditiis debitis minima provident
necessitatibus odit eos nobis dolores dignissimos velit harum placeat, modi molestias
dolorem voluptatum. Ullam minima totam aliquid, temporibus odit quas exercitationem,
ab incidunt illo nesciunt soluta ad sit repudiandae delectus mollitia minus illum
hic tempora vitae aut iste, eaque odio fugit! Tempora consequatur nemo quidem suscipit
vel! Aut illo animi aspernatur eveniet sapiente vero! Veniam, dolorum. Provident,
similique temporibus consequuntur qui facilis aspernatur aliquam ex exercitationem
doloremque numquam commodi sapiente suscipit reprehenderit, eum doloribus aut consectetur
dicta, repudiandae quis minus quasi quae fugiat enim error. Veritatis ut, illo, autem,
nam labore inventore ab eum eligendi molestias modi est nostrum. Sed unde, magnam
temporibus nemo sequi, tempora atque molestiae cum dolor minus ratione incidunt velit
nobis corporis doloribus repellendus modi architecto quia? Voluptas, numquam tempora
ipsum eaque tempore similique repellendus placeat molestiae magni veniam! Beatae
eaque ex pariatur veniam, dolor fugiat ratione ab. Velit debitis consectetur, fugit,
perspiciatis laborum, quas maxime accusantium enim consequuntur fuga quisquam earum
dolorum ducimus est ex. Placeat molestiae perferendis odio hic inventore? Rerum repellat
culpa a, molestiae quaerat accusantium vero commodi accusamus iusto rem ipsum alias
excepturi dolorem expedita. Repellendus corrupti asperiores illo facilis ipsa laboriosam
expedita. Dolorem tempore facere tempora ratione harum ad! Reprehenderit molestiae,
quidem laboriosam facilis nesciunt reiciendis asperiores laudantium unde animi laborum
illo et nam libero ab optio consequuntur quia consequatur quasi architecto ducimus
qui accusantium doloribus, repellat dicta. Illo voluptatem nam pariatur libero minus
assumenda deleniti! Soluta quidem, nisi omnis, minus consequatur quasi quaerat voluptatem,
officiis magni molestias aspernatur vel? At nulla eum neque ipsa saepe, enim suscipit
distinctio aperiam pariatur nostrum consequatur voluptate sit dignissimos numquam
animi labore quos! Explicabo vero error architecto quae quo veniam quidem nesciunt
impedit perspiciatis rem, fugit libero iste perferendis, praesentium, modi eligendi
doloribus culpa! Error, quasi a. Sit deserunt, maxime, asperiores omnis sequi recusandae
quo sed, culpa magni accusamus laborum quos. Porro, eligendi harum ea, ducimus ab
totam eaque sequi facilis iste perferendis aut. Laboriosam totam, perferendis odio
earum adipisci quas quod reprehenderit id voluptatem aperiam dolor tempore, quidem
aut omnis nostrum alias repudiandae tenetur reiciendis beatae praesentium incidunt
consectetur? Nobis ea culpa quod vitae corporis magni perspiciatis? Earum sit ipsa,
nesciunt voluptates, itaque laudantium odio aspernatur ad distinctio soluta blanditiis
qui temporibus porro in adipisci harum asperiores libero necessitatibus corrupti
commodi, aut mollitia. Consectetur error, eligendi possimus voluptas necessitatibus
dicta quis suscipit quaerat incidunt maiores aperiam debitis tenetur eos maxime ex
id, reiciendis nemo corporis distinctio modi pariatur sunt iusto. Tenetur quibusdam
quaerat ratione, a in veniam aliquam, velit ipsam aut est quos omnis corrupti quae
inventore id aspernatur odit praesentium ipsum quia accusamus exercitationem obcaecati
at. Debitis, vitae? Est recusandae placeat sint consequuntur commodi distinctio ducimus
nesciunt fuga. Dolores, perspiciatis error? Nulla hic molestiae provident blanditiis
ipsum? Aliquid alias nisi delectus sequi officia dicta consequuntur beatae similique
eaque dolores dolor, atque inventore, doloribus explicabo, tempora illo. Ex dolorem
odit illum maxime, nobis perspiciatis veritatis molestiae repellendus eligendi? Dicta,
eveniet libero. Neque inventore vitae harum consequatur nisi voluptas, alias praesentium
modi facilis odio reprehenderit ab magni quae quod, enim corrupti veritatis dicta
doloremque quaerat quia eos rerum voluptate. Qui hic nemo quae, voluptate commodi
at, fugit labore ut beatae, cumque ex. Maxime corrupti mollitia cupiditate similique
reiciendis ipsa sapiente aspernatur deleniti? Ex quo corporis aliquam blanditiis
minima vitae eveniet nihil sint commodi unde, expedita perspiciatis libero in neque
impedit, quasi molestias earum atque fugit, dolorem sequi quam? Impedit, consequuntur!
Eos cumque iste facilis ad, quos fuga, aspernatur ducimus ipsa dicta tenetur necessitatibus
veritatis qui quo placeat illum magnam quia repellendus, minima aliquam consectetur.
Aperiam similique quasi, esse error quo suscipit, quidem animi est itaque explicabo
fuga dignissimos ducimus culpa, magnam molestias velit hic! Corrupti laudantium odio
suscipit reiciendis mollitia, ducimus possimus ipsa dicta similique magni quis quisquam.
Corporis blanditiis, doloremque vero sit distinctio ratione ut aut deleniti id harum
ipsum fugiat voluptatibus sint dolorum magni ad quaerat unde eos quos fugit! Quis
accusantium, ullam laudantium molestias quod tenetur saepe sunt dicta itaque quia
vero? Autem alias minima fuga ipsum vel, rem iste cumque impedit assumenda, inventore
corrupti ducimus omnis. Sed placeat at cumque doloribus ab ullam, voluptatem unde
obcaecati! Dolorem ipsa eaque quibusdam pariatur nemo illo, adipisci quia fugiat
perspiciatis consequatur unde, quidem temporibus repellat sapiente dolor velit incidunt
accusamus nisi, dolore impedit quo reprehenderit. Dolores facilis placeat magni doloremque
asperiores? Atque, eveniet omnis sunt voluptatum ea aliquid et aspernatur dolorem
praesentium exercitationem rem nam amet incidunt ut. Vel, ratione ea! Eius eum quidem
velit saepe, qui ipsam accusamus vitae laborum cupiditate id, inventore hic doloribus
earum dolorem, aliquam incidunt dolor. Quos harum placeat nostrum voluptatem neque
minima unde, vitae eum ad quidem rem amet aliquid ab recusandae dolor excepturi eveniet?
Explicabo reiciendis facilis maiores quidem perferendis ad similique recusandae deleniti
mollitia, itaque sapiente pariatur obcaecati nulla ratione, est debitis earum suscipit,
architecto deserunt repellat. Quae non sed, possimus veniam, fugit pariatur omnis
suscipit neque sit enim eaque amet animi illum obcaecati. Voluptates incidunt quos
cupiditate, eligendi officia hic quam fugit! Eius odio quasi voluptate dicta dolorem
sequi, optio odit laborum distinctio saepe esse omnis, eaque blanditiis soluta necessitatibus
excepturi sit, sunt itaque a quam. Culpa atque delectus quisquam dolor eligendi officiis
pariatur inventore vel commodi vitae velit id cum ad in aspernatur nam ratione dolorem
sit, sed sequi deleniti. Suscipit amet nobis quam quasi totam sint, optio excepturi
laborum quia rerum eveniet cum aliquid! Asperiores voluptas possimus magnam tempore
ratione eaque. Accusamus autem nisi sint illum assumenda nam minus. Perspiciatis
incidunt quo dolorum a sit officia molestiae provident soluta corporis sint accusantium
excepturi iusto, culpa fugiat cum molestias, odit, possimus rem amet vero consequatur
iste commodi aliquid! Voluptas debitis quas aliquam facere natus consequuntur quo
cum, fugit vitae nulla! Quibusdam id reiciendis aliquam molestias laborum dicta voluptates
dignissimos pariatur itaque blanditiis optio ducimus saepe, nisi reprehenderit necessitatibus.
Soluta dicta, atque quae qui expedita placeat ipsum rerum voluptatum vel aliquid
harum consectetur molestias iste deleniti, sit a consequatur explicabo. Numquam consequuntur
ratione repudiandae error qui quos minima, tempora eaque ducimus fuga assumenda obcaecati
sunt molestiae accusamus quibusdam necessitatibus? Autem numquam ad nobis architecto
iusto eos enim blanditiis natus dolorem totam fugit aperiam odio optio, commodi quo
deserunt accusantium officiis dignissimos repellendus tempora provident laboriosam?
Sunt, voluptates? A dolor quidem asperiores. Natus deserunt culpa, iure quam, sunt
dignissimos reprehenderit corporis excepturi ullam, explicabo veritatis! Repellendus
maxime omnis voluptas voluptates alias vero veniam voluptatum dicta earum ipsa eaque
nobis facilis possimus saepe in quas quidem recusandae, veritatis error delectus?
Consequatur laudantium, modi, voluptatum nulla rem suscipit eos corporis blanditiis
sit expedita sed eius tenetur, unde atque nobis dignissimos reiciendis. Dignissimos,
quibusdam. Esse sit reprehenderit ex minus accusamus illo praesentium ut reiciendis
inventore et dolorem nemo necessitatibus, officiis quidem deleniti iusto repudiandae
provident tenetur doloremque natus, quam perspiciatis! Libero dolor error tempora
voluptas illum esse, dolorum quis consectetur? Soluta nam doloribus saepe totam non.
Quaerat doloribus nobis quisquam voluptatibus quo quod esse mollitia saepe et! Eum
eius tempora odit ad, perferendis eveniet nihil odio veritatis dolorem temporibus
optio voluptatem dignissimos, repudiandae accusantium nulla ipsum molestias atque
ipsam. Corporis cupiditate iure facilis inventore sit qui voluptas consectetur, delectus
vitae vel, consequuntur quisquam sequi totam temporibus doloribus soluta magnam voluptatem
molestiae ex autem. Asperiores atque natus error. Cumque, voluptatum? Dicta nesciunt
esse veritatis fuga labore at nobis voluptate velit accusantium odit maxime officiis,
dolor sit quis, sapiente illum cum in sequi fugiat praesentium explicabo. Fugit quod
quas sint laudantium distinctio dolores delectus eveniet sit, deserunt natus ipsum,
harum possimus! Dicta ratione necessitatibus corrupti dolor? Voluptatem rem vel tempore
accusantium nemo dolor tenetur. Aliquam natus tempore, ut, assumenda vero deserunt
doloribus, aut molestias quidem dolor quae repellendus? Unde, in! Dignissimos distinctio,
modi tenetur qui aspernatur earum, ut temporibus, nobis saepe quidem ad delectus.
Laudantium placeat tempora beatae nemo deleniti veritatis sint magnam, consectetur,
maiores ipsum assumenda distinctio quasi ipsa nihil explicabo, nam porro eos sunt?
Nulla delectus nesciunt, tenetur facilis vero, provident iusto velit, odio non illum
eveniet placeat repudiandae ullam modi? Laborum illo consectetur, reiciendis iure
exercitationem sunt magnam repellat quisquam fugiat id architecto possimus error
ipsa doloremque repellendus quae assumenda odit. Optio mollitia ipsum non neque fugit,
aut aliquam dignissimos ea quis a odit rerum? Illo asperiores reiciendis ullam obcaecati
magnam? Repudiandae, perferendis sed. Distinctio aliquid facere quaerat. Aperiam
sequi esse maxime voluptatum libero ullam, ex incidunt accusantium dignissimos facilis,
saepe vitae odio cum tempora! Necessitatibus repellat alias quia inventore nobis.
Repellat recusandae illum natus iusto reiciendis, labore neque velit mollitia aspernatur
eaque! Nemo optio dolore accusantium reiciendis voluptates accusamus, dicta cupiditate
fugiat veritatis consequatur expedita repellendus voluptate ipsum necessitatibus
aperiam cumque voluptatum aliquam odio alias dolorum quasi labore ducimus. Eum a,
deleniti nemo inventore, neque odio rem tempore fuga velit laudantium accusamus consectetur?
Itaque laboriosam sunt in iste distinctio, consequatur quasi vero temporibus deserunt
eveniet. Odio sint facilis unde provident esse, animi quia deleniti similique aspernatur
veritatis ea velit architecto consequatur. Voluptates impedit unde doloremque quia?
Quos nihil eos accusantium nam maxime dignissimos molestiae optio dolor ab, soluta
id similique mollitia animi cum culpa architecto numquam saepe veritatis nisi veniam
quasi. Culpa dolores unde nam sed impedit tempora consectetur, quas ullam facere
itaque odio modi suscipit enim doloremque ducimus minima vero doloribus! Corrupti
aliquam harum et, nihil voluptatum porro temporibus odit ea! Hic blanditiis vero
nulla facilis nobis magnam expedita similique accusamus est quasi nisi repellat molestiae
numquam, dolorem enim. Qui dolorum ad eos vitae incidunt. Asperiores architecto eius
cupiditate, quidem iusto et nulla in hic quam corrupti pariatur accusamus accusantium,
cumque illum iure beatae optio odio, nostrum ea laudantium repellendus quia tempore.
Perferendis quia reprehenderit quos, excepturi veniam, obcaecati inventore adipisci
fugit accusantium, animi totam! Ad deleniti blanditiis aliquid nam, commodi reiciendis
quibusdam similique dolore distinctio facilis perferendis voluptatibus quas itaque.
Quos voluptatem odit iste molestias corporis, asperiores iure esse tenetur illum
sint aspernatur. Totam, hic, porro veritatis saepe necessitatibus eius perspiciatis
ullam id consequatur sed qui suscipit impedit nobis sunt consectetur. Ullam fugit
voluptate eius commodi culpa doloremque excepturi eos, a asperiores odio explicabo
consectetur nostrum exercitationem sequi corporis voluptatem assumenda deleniti quam
neque reiciendis? Ut iste nemo odio facere corrupti voluptates eos asperiores quod
quo et ab, explicabo pariatur minus itaque. Aliquam, consequuntur ad nostrum alias
earum neque quae dicta voluptatibus illo voluptas sit, beatae adipisci, reiciendis
ullam voluptate tenetur molestias. Distinctio cumque natus iste laborum aliquam,
accusamus necessitatibus? Impedit rerum quae eum cum harum explicabo non, ad iste
ratione necessitatibus obcaecati maiores voluptas nobis quia consequuntur optio deserunt
adipisci ullam vitae debitis. Fuga aspernatur natus autem quae distinctio laboriosam
accusantium aut nobis temporibus impedit. Blanditiis esse quis accusantium pariatur?
Sequi, dolorem nesciunt totam consequatur doloribus fugiat optio magni accusantium
maxime esse corporis obcaecati! Obcaecati sit, corrupti assumenda culpa doloribus,
nobis ducimus facilis sed rerum pariatur veritatis vitae eaque. Ad provident laborum
tempora natus nulla non, eveniet nobis quae nesciunt vel assumenda consequatur cumque,
sit nihil minima, sed eos alias quod dolore beatae! Esse soluta explicabo ut ipsam
in earum consequuntur quod quaerat ea adipisci consequatur sunt aperiam, animi nisi
voluptatem eum perspiciatis labore expedita numquam, excepturi fugiat enim commodi
ducimus aspernatur. Expedita, eligendi. Ipsam fuga quaerat iusto perspiciatis neque
blanditiis veniam tenetur aspernatur aut! Quod, earum? Soluta accusamus eaque id
velit quas deserunt maiores laborum reprehenderit quia quibusdam, necessitatibus
cupiditate nulla quos, provident nisi ducimus voluptates nam! Dolor excepturi eaque
repudiandae soluta maiores, laudantium animi officiis eius quam magnam dolores cum
sed quas quisquam mollitia, a officia ut sunt magni, ducimus aut provident tempore?
Voluptas quis provident velit maiores, totam voluptatibus, ab aut natus pariatur
adipisci explicabo voluptatem, non quos ratione quaerat laboriosam sapiente hic omnis
at vero nam temporibus. Omnis modi inventore necessitatibus. Odio, quis repellendus!
Vel autem iusto accusamus delectus quo. Earum necessitatibus, recusandae fugit animi
maiores vitae a nobis nesciunt perferendis asperiores. Temporibus culpa exercitationem
fuga aliquam porro magni unde a sequi nostrum necessitatibus nihil reprehenderit
maiores cumque dolores blanditiis voluptates libero earum, fugit eius cum neque incidunt!
Quam quidem animi totam cupiditate, earum ratione quod. Quae neque officiis ut ullam
doloremque beatae velit nobis quia, repudiandae sit obcaecati labore mollitia maiores
cumque culpa vel, porro quibusdam praesentium eaque ex? Fugiat accusantium quam laborum
laudantium tenetur, dicta repellat perspiciatis quis nisi eveniet facere minus voluptatibus
doloremque ipsam accusamus natus saepe aliquam. Quae, eum. Culpa cum nulla quas eveniet
itaque rem nostrum laudantium, repellendus eligendi iusto dicta molestiae assumenda
eaque dolorum laboriosam inventore dolorem! Perferendis explicabo omnis asperiores
debitis voluptate tenetur, expedita dolorum, at alias facilis nostrum provident totam
modi et illo nemo! Ipsam quasi, excepturi suscipit voluptatum quae quibusdam, dolorem
ipsum, animi debitis enim consequuntur. Quibusdam est nihil ducimus. Quisquam aut
laudantium nisi eum expedita, quia, molestias placeat commodi ut voluptatum illum,
pariatur quae sit ipsum. Facilis blanditiis quas quidem. Inventore ipsam quidem aspernatur
optio quis assumenda temporibus tempora? Rem, pariatur? Quam excepturi doloremque
ratione labore quas velit hic. Architecto molestiae reprehenderit delectus nihil
deleniti sit accusamus alias illum porro fugiat ducimus blanditiis fuga aliquid cupiditate,
consequatur earum itaque hic quia nobis cum. Consequuntur itaque praesentium perferendis
adipisci accusantium. Repellat consectetur aut debitis tempora fuga saepe facilis
voluptates id, error dolor excepturi asperiores velit doloribus animi consequatur
soluta odit reprehenderit nobis ducimus iste nemo nostrum incidunt voluptas quo.
Quam expedita commodi dolor ullam delectus recusandae veritatis qui laborum unde
natus voluptatibus neque laudantium culpa accusamus cum saepe maiores animi iure
possimus voluptate optio, magnam repellendus. Culpa debitis explicabo aliquam illo
non labore, sit eum modi, tempora eos dolores. Nihil cumque est necessitatibus suscipit
architecto provident pariatur veniam ea dolorum sit, dolor quasi, eveniet nemo aut
mollitia dolore atque sunt odit ipsa dignissimos! Tempora quidem aperiam ipsum voluptatum,
voluptates nobis alias hic unde sunt maxime nisi iste dolore non optio vel earum
est odio fuga aspernatur eaque molestiae nam architecto possimus porro? Sint et laborum
architecto a amet sunt rerum officiis, molestias non quos quo perspiciatis voluptatem
nihil corporis quibusdam excepturi aliquam obcaecati dolores. Vel reiciendis ipsam
veniam quasi voluptatum dolores, adipisci necessitatibus nihil velit error dicta
exercitationem sapiente quam sed, perferendis illo nulla unde voluptatibus excepturi
accusantium minus labore. Labore modi voluptatem deserunt dolor, rerum praesentium
corrupti repellat nemo, eveniet vero reprehenderit velit. Culpa tenetur omnis, inventore
odio aliquam nobis modi esse? Omnis accusantium sed, animi vero unde atque ipsa consequatur
assumenda, eaque fugiat beatae mollitia exercitationem commodi, ipsum praesentium
natus! Autem praesentium culpa cupiditate aut aliquid, magni magnam? Natus quam,
nobis quae repellat corrupti, nostrum unde, sed cupiditate dignissimos dolores laudantium
maxime soluta nulla commodi? Officia eveniet suscipit magnam molestiae dolor officiis
provident numquam id minima ab iste eum rem repudiandae delectus, laboriosam qui,
corrupti laudantium obcaecati ut, hic beatae facilis fugit ipsum dolores. Officia
consequatur vero maiores atque sunt officiis voluptates mollitia dolore. Illo, numquam
vel. Repellat est rem ipsum consectetur reprehenderit eum praesentium? Ipsum id quis
error commodi suscipit. Officiis quas, harum unde quaerat labore amet ipsam incidunt
quos deserunt totam consectetur fuga in voluptatibus expedita, odit tempore molestias?
Mollitia nemo neque labore hic quidem architecto quaerat, dicta non a. Rem quos saepe
amet nobis quae magni possimus debitis doloribus, provident, dolorem quibusdam maxime,
ad eaque distinctio. Assumenda ducimus quasi qui ea modi, repudiandae dolorum dolore.
Quisquam odit quis ratione repellat tempora in explicabo accusamus tenetur illo impedit
ipsum, cumque nulla consequuntur perferendis blanditiis eius dolores. Excepturi illum
dolores sapiente qui tempore adipisci nam obcaecati. Repellendus, fugiat corrupti,
at illo delectus pariatur possimus facere neque aspernatur veritatis quia, ipsa rerum
culpa tempora fuga aliquid nemo nam omnis natus? A nemo at error nulla quas amet
nesciunt, molestiae incidunt, odit expedita vitae consequatur! Eos doloremque quod
neque ratione totam consectetur ipsum repellat quisquam exercitationem deserunt dolorum
sit iusto reprehenderit nobis aliquid dicta molestiae asperiores sapiente obcaecati,
odio perspiciatis dolor sequi. Hic accusamus praesentium id asperiores nisi iste
alias voluptas ducimus reiciendis error maxime et ex ipsa, quo sed accusantium, aspernatur
illo, totam earum unde voluptatibus eligendi molestias eum odit. Similique, doloremque
eveniet vero maxime in blanditiis doloribus temporibus perspiciatis illo at velit
animi omnis atque asperiores, dolor, magni ipsa aspernatur. Quas dolores ducimus
vel natus nam voluptatibus, eligendi autem blanditiis impedit cum, esse error rerum
saepe? Eos, facilis omnis voluptas inventore debitis at voluptate! Ducimus ut dolor
modi error aut, sed, expedita iste id recusandae suscipit totam sequi cumque iure
quas voluptas accusamus asperiores officiis! Animi numquam, dolores explicabo ex
doloribus neque quod corrupti a dolorem tempore recusandae magni eius quisquam provident
quo fugiat consectetur natus commodi cum.

<style>
    #dashboard {
        border-radius: 0 0 20px 20px;
        background-size: cover !important;
        background-repeat: no-repeat;
        color: white;
        background: url("../assets/blobs.svg");
    }
    .uk-text-lead {
        color: white;
    }
    @media only screen and (min-width: 640px) {
        .widgets {
            transform: translateY(-25%);
        }
    }
</style>
