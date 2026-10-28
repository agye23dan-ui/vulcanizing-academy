// Extra question bank. Q(question, correct answer, ...wrong answers). The app shuffles options at display time.
const Q=(q,c,...w)=>({q,o:[c,...w],a:0});
const ADD={
s1t1:[
Q("Which item supports a vehicle while you work under it?","Axle stands","A jack on its own","A stack of bricks"),
Q("What two dangers does rubber cement bring?","Fire risk and harmful fumes","Electric shock and noise","Slippery floors and rust"),
Q("Why should you replace a worn pressure gauge?","A wrong reading is a safety risk","It looks untidy","It is hard to hold"),
Q("Which tool separates the tyre bead from the rim?","Bead breaker","Valve core tool","Reamer"),
Q("How do you move a heavy tyre a short distance?","Roll it on its tread","Carry it on your back","Drag it by the valve"),
Q("Which footwear protects against a dropped wheel?","Steel-toe boots","Open sandals","Soft sports shoes")],
s1t2:[
Q("In 205/65, what does the 65 describe?","Sidewall height as a percentage of width","Width in millimetres","Rim size in inches"),
Q("What do the wear bars in the grooves show?","When the tread is worn out","The age of the tyre","The load limit"),
Q("A DOT code ending in 2323 means:","Week 23 of 2023","Week 32 of 2023","Week 23 of 2032"),
Q("Which rubber wedge above the bead stiffens the lower sidewall?","The apex","The wear bar","The tread block"),
Q("The pressure printed on the sidewall is the:","Maximum, not the working pressure","Correct pressure for the car","Minimum safe pressure"),
Q("In 94H, what does H stand for?","Speed rating","Load index","Rim code")],
s1t3:[
Q("Which tyre type has plies that cross diagonally?","Bias-ply","Radial","Run-flat"),
Q("A directional tyre must be fitted so that the arrow:","Points the way the wheel turns","Points backwards","Faces the rim"),
Q("Can you run a tube-type tyre without its tube?","No, never","Yes, with sealant","Yes, on cars only"),
Q("An asymmetrical tyre is fitted so that:","The marked outer side faces out","Either side can face out","The tread faces inward"),
Q("Light truck (LT) tyres are made for:","Pickups and vans","Racing bicycles","Mobility scooters"),
Q("When replacing a tyre, never go below the original:","Load rating","Price","Brand")],
s1t4:[
Q("What is the drop centre of a rim for?","It lets the bead go over the rim edge","It holds the valve cap","It cools the brakes"),
Q("Which wheel type is lighter but can crack or chip?","Alloy","Steel","They are identical"),
Q("Which wheel weights suit alloy wheels?","Adhesive weights","Clip-on weights","Nails"),
Q("In a bolt pattern of 5 x 114.3, what does 5 mean?","Number of studs","Wheel width","Offset in millimetres"),
Q("What should you tell a customer about a faulty TPMS sensor?","The dashboard light will stay on","Nothing, it does not matter","It improves grip"),
Q("A wheel that wobbles when spun probably has:","A bent rim","Perfect balance","A new valve")],
s1t5:[
Q("What is the first step to remove a tyre?","Remove the valve core and let the air out","Lever the first bead","Break the rim"),
Q("Why never use oil or grease on a bead?","It can damage the rubber and let the tyre slip","It makes seating faster","It cools the rim"),
Q("A bead will not seat at 40 psi. What do you do?","Deflate, lubricate again and retry","Raise the pressure to 80 psi","Hit the tyre with a hammer"),
Q("When do you recheck wheel nuts after fitting?","After 50 to 100 km","Never","After a year"),
Q("What do you check inside the tyre before fitting?","Nails, cuts and damage","The colour","The price sticker"),
Q("Which bead goes onto the rim first?","The lower bead","The upper bead","Both together")],
s1t6:[
Q("What is the usual limit for a repairable puncture?","About 6 mm across","About 20 mm across","Any size"),
Q("Which sign inside a tyre means it was driven flat?","Dark rubber dust","A clean liner","A new smell"),
Q("Two punctures very close together mean:","Do not repair","Plug both","Patch from outside"),
Q("What should you ask the customer about a puncture?","How it happened and how far they drove on it","Where they bought the tyre","How old they are"),
Q("Cords showing through the rubber mean:","Replace the tyre","Repair with a plug","Ignore it"),
Q("If a tyre is unsafe to repair, you should:","Explain honestly why","Repair it quietly anyway","Charge extra")],
s2t1:[
Q("A string plug put in from outside is:","A temporary roadside fix","A permanent repair","Not allowed anywhere"),
Q("How should rubber cement be applied?","A thin coat allowed to dry","A thick wet coat","Not at all"),
Q("Which way do you stitch a patch?","From the centre outward","From the edge inward","You do not stitch it"),
Q("Cold vulcanizing uses:","A chemical bond at normal temperature","A heated clamp","Welding"),
Q("What does too much heat do in hot vulcanizing?","Burns the rubber and makes it brittle","Makes it stronger","Cures it more safely"),
Q("On a tube-type tyre you patch:","The tube","The sidewall","The valve")],
s2t2:[
Q("A highway call at night with children on board is:","Urgent: go first and advise on safety","Low priority","Refused"),
Q("How should you quote a call-out?","Call-out fee and repair price separately","One hidden price","After the job"),
Q("What do you record after a job?","The job, the price and the customer number","Nothing","Only the name"),
Q("A slow leak where the owner can drive carefully to you is:","Can wait","Urgent","Always refused"),
Q("Why ask about the spare and locking nut key on the call?","So you bring the right tools","To raise the price","To end the call quickly"),
Q("If you cannot reach a job in time you should:","Tell them and suggest another option","Ignore the call","Promise to come anyway")],
s2t3:[
Q("Which tool frees a stuck wheel nut?","Breaker bar","Reamer","Torch"),
Q("How should the portable compressor be kept?","Charged or on a 12 V lead","Empty and stored away","Left at the workshop"),
Q("Why carry spare valve cores?","To cover common valve failures","To fix sidewall cuts","To straighten rims"),
Q("What goes in labelled boxes in the kit?","Small parts like valve cores and plugs","The jack","The compressor"),
Q("What is a soapy water spray bottle used for?","Finding leaks","Cleaning your hands","Painting the rim"),
Q("What can a missing item in your kit cost you?","The job","Nothing","A fine")],
s2t4:[
Q("On a bend, where does the warning triangle go?","Before the bend","After the bend","Beside the car"),
Q("When walking back to place the triangle, which way do you face?","Oncoming traffic","Away from traffic","Down at the ground"),
Q("Which wheel do you chock?","The wheel diagonally opposite the one lifted","The same wheel you lift","Any wheel at all"),
Q("The tyre is shredded and the rim is hitting the road. You:","Do not move the vehicle","Drive slowly to the shop","Speed up to a safe place"),
Q("Where should passengers wait?","Well off the road, away from the vehicle","Inside the vehicle","In the traffic lane"),
Q("If the spot is too dangerous you should:","Refuse and arrange a tow or safer place","Work as fast as possible","Work with the lights off")],
s2t5:[
Q("Many small bubbles on a patch may mean:","A porous patch or a worn core","A perfect seal","Nothing"),
Q("A leak caused by a bent rim:","Cannot be fixed with a plug","Is fixed with a plug","Is ignored"),
Q("Sidewall damage means you:","Replace the tyre","Plug it","Patch it from outside"),
Q("In the slow leak test, when do you recheck pressure?","After a few minutes","After a year","Never"),
Q("When checking the rim edge you look for:","Bends","Colour","Stickers"),
Q("In the diagnosis order, what comes after looking and listening?","Check the valve with soapy water","Replace the tyre","Call a tow")],
s2t6:[
Q("After inserting a string plug you cut it:","Close to the tread","Long, like a tail","Before you insert it"),
Q("How do you fix a leak caused by rust on the bead seat?","Clean it with a wire brush","Paint over it","Ignore it"),
Q("Constant bubbles after a plug mean:","Another plug or a different repair is needed","All is fine","The valve cap is loose"),
Q("Liquid sealant in a tyre must be:","Washed out before a proper repair","Topped up","Left in place"),
Q("Why inflate a tube slightly before fitting it?","So it does not fold","So it bursts safely","To heat it"),
Q("When fitting a new valve core, do not:","Overtighten it","Refit the cap","Inspect the seat")],
s2t7:[
Q("Where do you place the jack?","At the vehicle jacking point","Under the bumper","Under the door"),
Q("Where nut seats are conical, the tapered side faces:","Inward, towards the wheel","Outward","Either way"),
Q("What helps with a seized wheel nut?","Penetrating oil and a breaker bar","Heat on an alloy wheel","A hammer"),
Q("A space-saver spare:","Has speed and distance limits","Has no limits","Never needs air"),
Q("What must the spare match?","Bolt pattern and size","Colour","Brand name"),
Q("Why slide the removed wheel under the sill?","As a backup if the jack fails","As decoration","As a chock")],
s3t1:[
Q("Dynamic imbalance in a wheel causes:","A wobble","Only a bounce","No effect"),
Q("In alignment, toe describes:","Whether the wheels point in or out","The tilt at the top of the wheel","The steering axis angle"),
Q("Camber is:","The tilt of the wheel at the top","The tyre pressure","The wheel weight"),
Q("How often should tyres be rotated?","About every 8,000 to 10,000 km","Every 100 km","Never"),
Q("When should you skip rotation?","When front and rear sizes differ","When the tyres are new","When it is wet"),
Q("After fitting weights you spin the wheel again to check it:","Reads zero","Is loud","Is warm")],
s3t2:[
Q("Wear in the centre of the tread means:","Over-inflation","Under-inflation","Bad alignment"),
Q("Wear on one edge only suggests:","An alignment or camber problem","Over-inflation","A faulty valve"),
Q("Cupping (patchy dips) suggests:","Worn shocks or an unbalanced wheel","Low pressure","Old age only"),
Q("The legal minimum tread depth in many countries is:","1.6 mm","10 mm","0 mm"),
Q("At about what depth should you advise replacement?","Around 3 mm","Around 1 mm","Around 8 mm"),
Q("Tyre pressure rises after driving, so you check:","When the tyres are cold","When the tyres are hot","Only in the rain")],
s3t3:[
Q("Alloy motorcycle rims scratch easily, so use:","Rim protectors and small levers","A big hammer","A steel bar"),
Q("Before repairing a run-flat tyre you check:","The maker's advice","The colour","Nothing"),
Q("Lowering pressure on sand helps traction:","Only briefly","For the whole journey","Never"),
Q("For truck work you need:","A proper truck jack and stands","A small car jack","A wooden block"),
Q("Tricycles carry heavy loads, so you:","Check pressures carefully","Never add air","Use the lowest pressure"),
Q("A wheel is stuck in mud. First you:","Dig around it","Spin the wheel","Jack at once")],
s3t4:[
Q("What can a damaged split rim lock ring do?","Fly off","Rust slowly","Nothing"),
Q("You must never hit a rim that is:","Under pressure","Empty","Cold"),
Q("Safe truck tyre inflation uses:","A clip-on chuck and long hose","Holding the chuck in front of the tyre","Leaning over the tyre"),
Q("Retreading puts new tread on:","A sound casing","Any damaged tyre","A bare rim"),
Q("In hot retreading, new rubber is:","Moulded onto the casing with heat","Glued with tape","Painted on"),
Q("Dual truck tyres should:","Match in size and wear","Differ in size","Be inflated unevenly")],
s3t5:[
Q("Which case means you tow?","A bent or cracked rim","A small tread nail","A missing valve cap"),
Q("When you refuse a repair you should:","Show the customer the damage","Say nothing","Hide the tyre"),
Q("You suspect steering damage. You:","Tow the vehicle","Drive it away","Ignore it"),
Q("What should you note after a refusal?","What you found and what you advised","Nothing","The weather"),
Q("A customer insists on an unsafe repair. You:","Can decline","Must do it","Double the price"),
Q("Which contact should you keep?","A trusted tow operator","A rival","None")],
s3t6:[
Q("How should you charge for a call-out?","A call-out fee plus a repair fee","A tip only","Nothing"),
Q("Giving a discount below your cost:","Causes a loss on the job","Raises profit","Is free marketing"),
Q("In the worked example, how many jobs reach break-even?","5 jobs","50 jobs","1 job"),
Q("When do you restock plugs and cement?","When stock reaches your minimum level","Never","Once a year"),
Q("A WhatsApp business number helps:","Customers contact you easily","Hide your location","Raise prices"),
Q("Which jobs deserve a follow-up a day later?","Important jobs","Only strangers","None")]
};
const XEX={
1:[
Q("What does 205 in 205/65 R15 measure?","Section width in millimetres","Rim size","Speed rating"),
Q("Rubber cement and solvents are a:","Fire and fume hazard","Lubricant","Free cleaner"),
Q("The deep well in a rim that helps mounting is the:","Drop centre","Flange","Valve hole"),
Q("A tyre older than the maker advises should be:","Checked by DOT code and likely replaced","Painted","Sold as new"),
Q("What do you do to the bead before fitting?","Lubricate it","Dry it","Heat it"),
Q("Which damage can never be plugged?","Sidewall damage","A small tread nail","A valve leak"),
Q("A tube-type tyre needs:","An inner tube","No tube","A larger rim"),
Q("A directional tyre must be fitted:","With the arrow pointing the way the wheel turns","Either way round","Backwards")],
2:[
Q("What do you do first on arrival at a roadside job?","Park safely, hazards on, place the triangle","Start the repair","Jack the car up"),
Q("Which repair needs the tyre off the rim?","Patch-plug","String plug","Sealant"),
Q("Why check the spare before fitting it?","It may be flat or damaged","To admire it","It never matters"),
Q("The spot is unsafe to work in. You:","Move the vehicle or tow","Work faster","Ignore the risk"),
Q("Cold vulcanizing suits:","Quick field repairs","Retreading","Large truck casings"),
Q("A caller on a highway with children aboard is:","Urgent","Low priority","Refused"),
Q("How should you keep a job record?","A simple log of date, name, location, price and result","Memory only","No record"),
Q("A tube is patched after:","Buffing, cement and drying","Painting","Nothing")],
3:[
Q("Which sign means retire a tyre?","Cracks, bulges or exposed cords","A dirty tread","A new valve cap"),
Q("Selling a repair below cost:","Loses money on every job","Builds profit","Is required"),
Q("Which tyres call for a cage or restraint when inflated?","Truck and split-rim tyres","Bicycle tyres","Garden wheelbarrow tyres"),
Q("A customer wants an unsafe repair. You:","Explain and decline","Do it free","Do it fast"),
Q("Which alignment angle is the tilt of the wheel?","Camber","Toe","Caster"),
Q("What brings repeat customers?","Polite, on-time service","Ignoring calls","Changing prices"),
Q("How should payments be kept?","Recorded for each job","Not at all","Told by voice only"),
Q("After work on a run-flat tyre you:","Check the pressure warning","Ignore the light","Cover the light")]
};
(function(){
const T=SEMS.flatMap(s=>s.topics);
Object.keys(ADD).forEach(id=>{const t=T.find(x=>x.id===id);if(t)t.quiz.push(...ADD[id])});
Object.keys(XEX).forEach(k=>EXAMS[k].push(...XEX[k]));
})();
