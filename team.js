import React from 'react';

import Layout from '../components/Layout';

import p1 from '../assets/images/presidents/p1.webp';
import p2 from '../assets/images/presidents/p2.webp';
import p3 from '../assets/images/presidents/p3.webp';
import p4 from '../assets/images/presidents/p4.webp';
import p5 from '../assets/images/presidents/p5.webp';
import p6 from '../assets/images/presidents/p6.webp';
import p7 from '../assets/images/presidents/p7.webp';

import p8 from '../assets/images/directors/d1.webp';
import p9 from '../assets/images/directors/d2.webp';
import p10 from '../assets/images/directors/d3.webp';
import p11 from '../assets/images/directors/d4.webp';

import p12 from '../assets/images/social-design/s1.webp';
import p13 from '../assets/images/social-design/s2.webp';

import p14 from '../assets/images/associates/a1.webp';
import p15 from '../assets/images/associates/a2.webp';
import p16 from '../assets/images/associates/a3.webp';
import p17 from '../assets/images/associates/a4.webp';
import p18 from '../assets/images/associates/a5.webp';
import p19 from '../assets/images/associates/a6.webp';
import p20 from '../assets/images/associates/a7.webp';

export default function Team() {
  return (
    <Layout>
      <section id="team" className="team-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <br></br>
              <h2 className="text-black mb-4 mt-10">Team</h2>

              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src={p1} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p2} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p3} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p4} className="img-fluid" alt="" />
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src={p5} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p6} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p7} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p8} className="img-fluid" alt="" />
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src={p9} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p10} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p11} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p12} className="img-fluid" alt="" />
                </div>
              </div>

              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src={p13} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p14} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p15} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p16} className="img-fluid" alt="" />
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src={p17} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p18} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p19} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={p20} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </section>
    </Layout>
  );
}
