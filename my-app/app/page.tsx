"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-white overflow-hidden font-[Bebas_Neue]">
      {/* ---------------- HEADER ---------------- */}
      <header className="w-full flex justify-center bg-black py-4">
        <div className="container max-w-[1100px] flex justify-center">
          <Image
            src="/image 4.png"
            alt="Right Wing Naturals Logo"
            width={250}
            height={60}
            className="object-contain"
          />
        </div>
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative flex items-center max-w-[1100px] h-[800px] justify-center w-full bg-white overflow-hidden">
        {/* Background wood floor */}
        <div className="absolute bottom-0 left-0 w-full">
          <Image
            src="/image 2.png"
            alt="Wooden floor"
            width={1920}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="container max-w-[1100px] px-6 md:px-10 lg:px-0 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start justify-between relative z-10">
          {/* ---------- LEFT TEXT SIDE ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[500px] text-center md:text-left pl-20"
          >
            <h1 className="text-[42px] sm:text-[50px] md:text-[58px] leading-tight font-bold tracking-tight">
              <span className="text-[#002E5B] block">BUILD THE GROOMING KIT</span>
              <span className="text-[#A4161A] block"></span>
              <span className="text-[#7A0C0C] block">GEORGE WASHINGTON</span>
              <span className="text-[#002E5B] block">WOULD BE PROUD OF.</span>
            </h1>

            <p className="mt-6 text-[18px] sm:text-[20px] text-gray-800 font-sans leading-relaxed">
              8 soaps. 1 Balm of the Brave. 3 bonus gifts. $169.98+ value, yours
              for $99. Free U.S. shipping.
            </p>

            {/* Icons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-6 text-gray-800 text-[16px] font-sans justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Image src="/Vector.png" alt="Scent Swap" width={26} height={26} />
                <span>60-Day Scent Swap</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/image 5.png" alt="30-Day Guarantee" width={26} height={26} />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/image 5 (1).png" alt="Ships in 48h" width={26} height={26} />
                <span>Ships in 48h</span>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-[#A4161A] text-white text-[20px] tracking-wide px-10 py-4 rounded-md shadow-md hover:bg-[#7A0C0C] transition-all font-sans"
            >
              BUILD MY ARSENAL NOW
            </motion.button>
          </motion.div>

          {/* ---------- RIGHT IMAGE STACK ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center md:justify-end w-full md:w-[550px] mt-10 md:mt-0"
          >
            <Image
              src="/Group 1.png"
              alt="Soap Stack"
              width={600}
              height={600}
              className="object-contain drop-shadow-lg w-[85%] sm:w-[70%] md:w-[100%]"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------- SECOND SECTION: CHOOSE 8 SOAPS ---------------- */}
      <section className="w-full bg-white py-24">
        <div className="container max-w-[1100px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-[#002E5B] text-2xl tracking-wide font-sans mb-2">
              STEP 1
            </h3>
            <h2 className="text-[#A4161A] text-[64px] leading-none font-bold">
              CHOOSE 8 SOAPS
            </h2>
          </div>

          {/* Grid + Sidebar */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Soaps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="border rounded-md shadow-sm hover:shadow-md transition-all bg-white overflow-hidden"
                >
                  {/* Soap Header */}
                  <div className="bg-[#A4161A] py-2 text-center text-white text-xl font-bold">
                    DARK HORSE
                  </div>
                  <div className="flex justify-center items-center py-6">
                    <Image
                      src="/darkhorse.png"
                      alt="Soap"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>

                  {/* Soap Description */}
                  <div className="px-4 pb-6 text-center">
                    <h3 className="text-[16px] font-bold font-sans mb-2">
                      Black Raspberries and Vanilla Bean
                    </h3>
                    <p className="text-sm text-gray-600 font-sans">
                      Razzle Dazzle smells like sweet black raspberry jam and
                      warm vanilla. It’s one of the most likable fragrances and
                      it’s even more popular because of its purple spots!
                    </p>

                    <button className="mt-4 bg-black text-white w-full py-2 rounded-md text-sm font-bold tracking-wide hover:bg-gray-900 transition">
                      SHOP NOW →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[320px] bg-[#0F172A] text-white p-6 rounded-lg shadow-md font-sans">
              <h3 className="text-2xl font-bold mb-4">Your Arsenal</h3>
              <ul className="text-sm space-y-1 mb-6">
                <li>DARK HORSE × 2&nbsp;&nbsp;&nbsp;$18.00</li>
                <li>KINGDOM OF THE WEST × 1&nbsp;&nbsp;&nbsp;$9.00</li>
                <li>BRYSON WOODS × 1&nbsp;&nbsp;&nbsp;$9.00</li>
                <li>PINE & PILSNER × 1&nbsp;&nbsp;&nbsp;$9.00</li>
                <li>CEDAR GONE WILD × 1&nbsp;&nbsp;&nbsp;$9.00</li>
                <li>FRANKINSEXY × 1&nbsp;&nbsp;&nbsp;$9.00</li>
                <li>FRESHLY MINTED × 1&nbsp;&nbsp;&nbsp;$9.00</li>
                <li>BALM OF THE BRAVE × 1&nbsp;&nbsp;&nbsp;$35.00</li>
              </ul>

              <div className="border-t border-gray-700 my-4"></div>
              <ul className="text-sm space-y-1 mb-6">
                <li>Scent Swap Card&nbsp;&nbsp;&nbsp;$18.00</li>
                <li>Shipping (Free)&nbsp;&nbsp;&nbsp;$9.99</li>
                <li>Shipping Protection&nbsp;&nbsp;&nbsp;$4.99</li>
              </ul>

              <div className="border-t border-gray-700 my-4"></div>
              <p className="text-sm">Total Value: $139.98</p>
              <p className="text-sm">Bundle Price: $99.00</p>
              <p className="text-sm mb-6">Mystery Bars (2-pack): $9.00</p>
              <h4 className="text-xl font-bold mb-4">Total: $108.00</h4>

              <button className="w-full bg-[#A4161A] py-3 rounded-md font-bold text-white text-sm hover:bg-[#7A0C0C] transition">
                Add My Arsenal to Cart — $108
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- THIRD SECTION: CHOOSE 1 BALM ---------------- */}
      <section className="w-full bg-white py-24">
        <div className="container max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-[#002E5B] text-2xl tracking-wide font-sans mb-2">
              STEP 2
            </h3>
            <h2 className="text-[#A4161A] text-[64px] leading-none font-bold">
              CHOOSE 1 BALM
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="border rounded-md shadow-sm hover:shadow-md transition-all bg-white overflow-hidden"
              >
                <div className="bg-[#A4161A] py-2 text-center text-white text-xl font-bold">
                  BALM OF THE BRAVE
                </div>
                <div className="flex justify-center items-center py-6">
                  <Image
                    src="/image 6 (1).png"
                    alt="Balm"
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
                <div className="px-4 pb-6 text-center">
                  <button className="mt-2 bg-black text-white w-full py-2 rounded-md text-sm font-bold tracking-wide hover:bg-gray-900 transition">
                    {i % 2 === 0 ? "SELECT" : "SHOP NOW"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FOURTH SECTION: PICK 3 FREE GIFTS ---------------- */}
      <section className="w-full bg-white py-24">
        <div className="container max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-[#002E5B] text-2xl tracking-wide font-sans mb-2">
              STEP 3
            </h3>
            <h2 className="text-[#A4161A] text-[64px] leading-none font-bold">
              PICK 3 FREE GIFTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Gift 1 */}
            <div className="border-2 border-blue-500 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all text-center bg-white">
              <div className="bg-[#fce7e7] flex justify-center py-6">
                <Image
                  src="/image 6 (2).png"
                  alt="Soap Tree"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#A4161A] text-lg mt-4 font-bold">
                SOAP TREE - BAR SAVER
              </h3>
              <button className="mt-4 mb-6 bg-black text-white w-[90%] mx-auto py-2 rounded-md text-sm font-bold tracking-wide hover:bg-gray-900 transition">
                SELECT
              </button>
            </div>

            {/* Gift 2 */}
            <div className="border-2 border-blue-500 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all text-center bg-white">
              <div className="bg-[#fce7e7] flex justify-center py-6">
                <Image
                  src="/image 6 (4).png"
                  alt="Freedom Socks"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#A4161A] text-lg mt-4 font-bold">
                FREEDOM SOCKS
              </h3>
              <button className="mt-4 mb-6 bg-black text-white w-[90%] mx-auto py-2 rounded-md text-sm font-bold tracking-wide hover:bg-gray-900 transition">
                SELECT
              </button>
            </div>

            {/* Gift 3 */}
            <div className="border-2 border-blue-500 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all text-center bg-white">
              <div className="bg-[#fce7e7] flex justify-center py-6">
                <Image
                  src="/image 6 (3).png"
                  alt="Wrap This Gift"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#A4161A] text-lg mt-4 font-bold">
                WRAP THIS GIFT!
              </h3>
              <button className="mt-4 mb-6 bg-black text-white w-[90%] mx-auto py-2 rounded-md text-sm font-bold tracking-wide hover:bg-gray-900 transition">
                SELECT
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------- FIFTH SECTION: WE'VE GOT YOUR BACK ---------------- */}
      <section className="relative w-full bg-white py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
          <Image
            src="/3 1.png"
            alt="Wood Background"
            width={900}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container max-w-[1100px] mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[48px] font-bold">
              <span className="text-[#002E5B]">WE'VE GOT YOUR BACK.</span>{" "}
              <span className="text-[#A4161A]">PERIOD.</span>
            </h2>
          </div>

          {/* Guarantee Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-[700px]">
            {/* Card 1 */}
            <div className="bg-[#A4161A] text-white rounded-md p-8 text-center flex flex-col items-center justify-between">
              <div className="w-[100px] h-[100px] bg-white text-black flex items-center justify-center rounded-full font-bold mb-6">
                Image 01.
              </div>
              <h3 className="text-2xl font-bold mb-2">
                30-DAY SATISFACTION GUARANTEE
              </h3>
              <p className="text-sm leading-relaxed font-sans">
                If you don’t love it, you get your money back. No forms.
                <br />
                No hoops. No hard feelings.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#A4161A] text-white rounded-md p-8 text-center flex flex-col items-center justify-between">
              <div className="w-[100px] h-[100px] bg-white text-black flex items-center justify-center rounded-full font-bold mb-6">
                Image 04.
              </div>
              <h3 className="text-2xl font-bold mb-2">48-HOUR SHIP GUARANTEE</h3>
              <p className="text-sm leading-relaxed font-sans">
                We don’t sit on your order.
                <br />
                Your Arsenal ships within 2 business days—guaranteed.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#A4161A] text-white rounded-md p-8 text-center flex flex-col items-center justify-between">
              <div className="w-[100px] h-[100px] bg-white text-black flex items-center justify-center rounded-full font-bold mb-6">
                Image 02.
              </div>
              <h3 className="text-2xl font-bold mb-2">60-DAY SCENT SWAP CARD</h3>
              <p className="text-sm leading-relaxed font-sans">
                Don’t vibe with a couple scents? No problem.
                <br />
                We’ll send you 2 replacements—fast, on us.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#A4161A] text-white rounded-md p-8 text-center flex flex-col items-center justify-between">
              <div className="w-[100px] h-[100px] bg-white text-black flex items-center justify-center rounded-full font-bold mb-6">
                Image 03.
              </div>
              <h3 className="text-2xl font-bold mb-2">INSTANT SHIPPING PROTECTION</h3>
              <p className="text-sm leading-relaxed font-sans">
                Lost, stolen, or damaged?
                <br />
                We replace it instantly. Zero stress.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------- SIXTH SECTION: $99 ARSENAL ---------------- */}
      <section className="w-full bg-white py-24">
        <div className="container max-w-[1100px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="text-[#002E5B] text-2xl tracking-wide font-sans mb-2">
              WHAT YOU'LL GET IN YOUR
            </h3>
            <h2 className="text-[#A4161A] text-[64px] leading-none font-bold">
              $99 ARSENAL
            </h2>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-[#FCE7E7] rounded-md p-8 text-center flex flex-col items-center justify-center shadow-sm">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#A4161A] font-bold mb-4">
                <Image src="/icon-soap.png" alt="Soap Icon" width={40} height={40} />
              </div>
              <h3 className="text-lg font-bold text-[#A4161A] mb-1">
                8 BAR SOAPS
              </h3>
              <p className="text-3xl font-bold text-[#A4161A]">$72.00</p>
            </div>

            {/* Item 2 */}
            <div className="bg-[#E9F2FA] rounded-md p-8 text-center flex flex-col items-center justify-center shadow-sm">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#002E5B] font-bold mb-4">
                <Image src="/icon-balm.png" alt="Balm Icon" width={40} height={40} />
              </div>
              <h3 className="text-lg font-bold text-[#002E5B] mb-1">
                1 BALM OF THE BRAVE
              </h3>
              <p className="text-3xl font-bold text-[#002E5B]">$35.00</p>
            </div>

            {/* Item 3 */}
            <div className="bg-[#FCE7E7] rounded-md p-8 text-center flex flex-col items-center justify-center shadow-sm">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#A4161A] font-bold mb-4">
                <Image src="/icon-tree.png" alt="Soap Tree Icon" width={40} height={40} />
              </div>
              <h3 className="text-lg font-bold text-[#A4161A] mb-1">
                SOAP TREE (FREE)
              </h3>
              <p className="text-3xl font-bold text-[#A4161A]">$9.00</p>
            </div>

            {/* Item 4 */}
            <div className="bg-[#E9F2FA] rounded-md p-8 text-center flex flex-col items-center justify-center shadow-sm">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#002E5B] font-bold mb-4">
                <Image src="/icon-sack.png" alt="Soap Sack Icon" width={40} height={40} />
              </div>
              <h3 className="text-lg font-bold text-[#002E5B] mb-1">
                SOAP SACK (FREE)
              </h3>
              <p className="text-3xl font-bold text-[#002E5B]">$9.00</p>
            </div>

            {/* Item 5 */}
            <div className="bg-[#FCE7E7] rounded-md p-8 text-center flex flex-col items-center justify-center shadow-sm">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#A4161A] font-bold mb-4">
                <Image src="/icon-socks.png" alt="Socks Icon" width={40} height={40} />
              </div>
              <h3 className="text-lg font-bold text-[#A4161A] mb-1">
                FREEDOM SOCKS (FREE)
              </h3>
              <p className="text-3xl font-bold text-[#A4161A]">$12.00</p>
            </div>

            {/* Item 6 */}
            <div className="bg-[#E9F2FA] rounded-md p-8 text-center flex flex-col items-center justify-center shadow-sm">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#002E5B] font-bold mb-4">
                <Image src="/icon-card.png" alt="Card Icon" width={40} height={40} />
              </div>
              <h3 className="text-lg font-bold text-[#002E5B] mb-1">
                SCENT SWAP CARD
              </h3>
              <p className="text-3xl font-bold text-[#002E5B]">$18.00</p>
            </div>

            {/* Item 7 */}
            <div className="bg-[#FCE7E7] rounded-md p-8 text-center flex flex-col items-center justify-center shadow-sm">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#A4161A] font-bold mb-4">
                <Image src="/icon-truck.png" alt="Shipping Icon" width={40} height={40} />
              </div>
              <h3 className="text-lg font-bold text-[#A4161A] mb-1">
                SHIPPING (FREE)
              </h3>
              <p className="text-3xl font-bold text-[#A4161A]">$9.00</p>
            </div>

            {/* Item 8 */}
            <div className="bg-[#E9F2FA] rounded-md p-8 text-center flex flex-col items-center justify-center shadow-sm">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#002E5B] font-bold mb-4">
                <Image src="/icon-shield.png" alt="Protection Icon" width={40} height={40} />
              </div>
              <h3 className="text-lg font-bold text-[#002E5B] mb-1">
                SHIPPING PROTECTION
              </h3>
              <p className="text-3xl font-bold text-[#002E5B]">$4.99</p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------- SEVENTH SECTION: TAG US ON SOCIAL MEDIA ---------------- */}
      <section className="w-full bg-white py-24 text-center">
        <div className="container max-w-[1100px] mx-auto px-6">
          <h2 className="text-[#002E5B] text-[40px] font-bold mb-2">
            TAG US ON SOCIAL MEDIA.
          </h2>
          <p className="text-gray-700 text-lg font-sans mb-12">@rightwingnaturals</p>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="bg-gray-200 h-[250px] rounded-md flex items-center justify-center text-gray-700 text-lg font-sans"
              >
                Video 0{num}.
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EIGHTH SECTION: WHY THIS KIT WORKS ---------------- */}
      <section className="w-full bg-[#F5F7FA] py-24">
        <div className="container max-w-[1100px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#002E5B] text-[40px] md:text-[48px] font-bold leading-tight">
              WHY THIS KIT WORKS WHEN<br />OTHER STUFF DOESN'T
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-md p-8 shadow-sm text-center md:text-left">
              <div className="w-[40px] h-[40px] rounded-full bg-[#A4161A] text-white flex items-center justify-center font-bold text-lg mx-auto md:mx-0 mb-4">
                1
              </div>
              <h3 className="text-[#002E5B] font-bold text-lg mb-2">
                CLEAN WITHOUT COMPROMISE
              </h3>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                Most soaps out there leave your skin tight, itchy, or weirdly squeaky.
                That’s because they’re full of harsh detergents and chemicals that strip
                away your skin’s natural oils.
                <br /><br />
                Ours? Handcrafted, cold-processed bars loaded with real ingredients
                that clean deep <span className="font-bold text-[#A4161A]">without drying you out</span>.
                You’ll step out of the shower actually feeling clean — not like a piece
                of sandpaper.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-md p-8 shadow-sm text-center md:text-left">
              <div className="w-[40px] h-[40px] rounded-full bg-[#A4161A] text-white flex items-center justify-center font-bold text-lg mx-auto md:mx-0 mb-4">
                2
              </div>
              <h3 className="text-[#002E5B] font-bold text-lg mb-2">
                REPAIR WITH POWER
              </h3>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                Forget fruity lotions and mystery creams.
                <br /><br />
                <span className="font-bold text-[#A4161A]">Balm of the Brave</span> is made from grass-fed beef
                tallow — the closest thing to your skin’s natural oils. It
                <span className="font-bold text-[#A4161A]"> hydrates deeper</span>, repairs faster, and lasts
                longer than anything you’ve ever pulled from a drugstore shelf.
                <br /><br />
                No slime. No shine. Just real nourishment that works hard like you do.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-md p-8 shadow-sm text-center md:text-left">
              <div className="w-[40px] h-[40px] rounded-full bg-[#A4161A] text-white flex items-center justify-center font-bold text-lg mx-auto md:mx-0 mb-4">
                3
              </div>
              <h3 className="text-[#002E5B] font-bold text-lg mb-2">
                TOOLS THAT MAKE A DIFFERENCE
              </h3>
              <p className="text-sm text-gray-700 font-sans leading-relaxed">
                The <span className="font-bold text-[#A4161A]">SOAP TREE</span> keeps your bars dry and lasting longer.
                <br /><br />
                The <span className="font-bold text-[#A4161A]">SOAP SACK</span> scrubs like a loofah, and lathers like a dream.
                <br /><br />
                And <span className="font-bold text-[#A4161A]">FREEDOM SOCKS</span>? Because why the hell not—you earned ‘em!
                <br /><br />
                This isn’t some random grooming kit. It’s a purpose-built
                <span className="font-bold text-[#A4161A]"> GROOMING ARSENAL</span> designed to keep your skin in check and
                your standards high.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* ---------------- NINTH SECTION: REAL RESULTS FROM REAL PATRIOTS ---------------- */}
<section className="w-full bg-white py-24 relative">
  <div className="container max-w-[1100px] mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <h3 className="text-[#002E5B] text-2xl tracking-wide font-sans mb-2">
        REAL RESULTS FROM
      </h3>
      <h2 className="text-[#A4161A] text-[64px] leading-none font-bold">
        REAL PATRIOTS
      </h2>
    </div>

    {/* Reviews Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
      {/* Review 1 */}
      <div className="bg-[#F9F9F9] rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-[35px] h-[35px] bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-semibold text-[#002E5B]">Jess Santiago</p>
              <p className="text-xs text-gray-500">verified customer</p>
            </div>
          </div>
          <p className="text-gray-800 text-sm font-sans mb-3">
            Customer reviews
          </p>
          <div className="flex items-center text-[#A4161A] text-lg mb-2">
            ★★★★★
          </div>
        </div>
        <p className="text-xs text-gray-500 text-right">22.03.2021</p>
      </div>

      {/* Review 2 */}
      <div className="bg-[#F9F9F9] rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-[35px] h-[35px] bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-semibold text-[#002E5B]">Jess Santiago</p>
              <p className="text-xs text-gray-500">verified customer</p>
            </div>
          </div>
          <p className="text-gray-800 text-sm font-sans mb-3">
            Customer reviews
          </p>
          <div className="flex items-center text-[#A4161A] text-lg mb-2">
            ★★★★★
          </div>
        </div>
        <p className="text-xs text-gray-500 text-right">22.03.2021</p>
      </div>

      {/* Review 3 */}
      <div className="bg-[#F9F9F9] rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-[35px] h-[35px] bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-semibold text-[#002E5B]">Cali Huffman</p>
              <p className="text-xs text-gray-500">verified customer</p>
            </div>
          </div>
          <p className="text-gray-800 text-sm font-sans mb-3">
            There’s no other program that walks you through exactly what you need
            to know to start an online store fast, written by someone who has built
            several 7-figure ecommerce businesses from scratch. What’s more,
            everything has been broken down in step-by-step detail with real action
            plans including finding your niche.
          </p>
          <div className="flex items-center text-[#A4161A] text-lg mb-2">
            ★★★★★
          </div>
        </div>
        <p className="text-xs text-gray-500 text-right">22.03.2021</p>
      </div>

      {/* Review 4 */}
      <div className="bg-[#F9F9F9] rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-[35px] h-[35px] bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-semibold text-[#002E5B]">Cali Huffman</p>
              <p className="text-xs text-gray-500">verified customer</p>
            </div>
          </div>
          <p className="text-gray-800 text-sm font-sans mb-3">
            There’s no other program that walks you through exactly what you need
            to know to start an online store fast, written by someone who has built
            several 7-figure ecommerce businesses from scratch. What’s more,
            everything has been broken down in step-by-step detail with real action
            plans including finding your niche.
          </p>
          <div className="flex items-center text-[#A4161A] text-lg mb-2">
            ★★★★★
          </div>
        </div>
        <p className="text-xs text-gray-500 text-right">22.03.2021</p>
      </div>

      {/* Review 5 */}
      <div className="bg-[#F2F2F2] opacity-70 rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-[35px] h-[35px] bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-semibold text-[#002E5B]">Denny Rawlings</p>
              <p className="text-xs text-gray-500">verified customer</p>
            </div>
          </div>
          <p className="text-gray-800 text-sm font-sans mb-3">UX Designer</p>
          <div className="flex items-center text-[#A4161A] text-lg mb-2">
            ★★★★☆
          </div>
        </div>
        <p className="text-xs text-gray-500 text-right">22.03.2021</p>
      </div>

      {/* Review 6 */}
      <div className="bg-[#F2F2F2] opacity-70 rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-[35px] h-[35px] bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-semibold text-[#002E5B]">Denny Rawlings</p>
              <p className="text-xs text-gray-500">verified customer</p>
            </div>
          </div>
          <p className="text-gray-800 text-sm font-sans mb-3">UX Designer</p>
          <div className="flex items-center text-[#A4161A] text-lg mb-2">
            ★★★★☆
          </div>
        </div>
        <p className="text-xs text-gray-500 text-right">22.03.2021</p>
      </div>
    </div>

    {/* Down Arrow */}
    <div className="flex justify-center mt-16">
      <div className="w-[45px] h-[45px] border-2 border-[#A4161A] rounded-full flex items-center justify-center">
        <div className="text-[#A4161A] text-2xl">▼</div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
