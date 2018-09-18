import React from 'react';
import Axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Col, Container, Row} from 'reactstrap';

import {Header} from '../components/index.js';
import {Activity, BootcampForm} from './index.js';

class Home extends React.Component {
  state = {
    act: [
      {
        title: 'Pengenalan',
        description:
          'Pengenalan apa itu komunitas doscom dan seperti apa kami.',
        image: 'https://image.ibb.co/kEUvcK/perkenalan.png',
      },
      {
        title: 'Kegiatan',
        description: 'Apa-apa saja kegiatan dan acara yang kami lakukan.',
        image: 'https://image.ibb.co/k5DMHK/kegiatan.png',
      },
      {
        title: 'Games',
        description: 'Banyak games seru dalam kegiatan bootcamp.',
        image: 'https://image.ibb.co/h7zvcK/games.png',
      },
      {
        title: 'Ilmu Baru',
        description:
          'Banyak ilmu dari para sesepuh doscom yang akan diberikan dan pastinya bermanfaat.',
        image: 'https://preview.ibb.co/dFjiWe/ilmu.png',
      },
      {
        title: '',
        description: '',
        image: '',
      },
      {
        title: 'Teman Baru',
        description: 'Banyak teman baru yang pastinya seru-seru.',
        image: 'https://image.ibb.co/nfCRjz/temanbaru.png',
      },
      {
        title: 'Motivasi',
        description:
          'Ada juga merchendise berupa sticker dari bootcamp dan hadiah lainya.',
        image: 'https://image.ibb.co/neaCPz/motivasi.png',
      },
      {
        title: '',
        description: '',
        image: '',
      },
    ],
    data: [],
    detail: [
      [
        {
          icon: 'map',
          title: 'Tempat',
          description1: 'Villa taman, Bandungan,',
          description2: 'Kab. Semarang',
        },
        {
          icon: 'calendar-alt',
          title: 'Tangal 29-30',
          description1: 'September 2018',
          description2: 'Hari Sabtu - Minggu',
        },
      ],
      [
        {
          icon: 'address-card',
          title: 'Pendaftaran',
          description1: 'Udinus Gd. H lt.1 Lorong TU',
          description2: 'Udinus Gd. D lt.1 Camp Doscom',
        },
        {
          icon: 'bus-alt',
          title: 'Kuota Terbatas',
          description1: 'Hanya tersedia untuk 40 orang peserta',
          description2: '',
        },
      ],
    ],
  };

  componentDidMount() {
    Axios.get('https://broken-stallion.glitch.me/').then(res => {
      this.setState({
        data: res.data,
        loading: false,
      });
    });
  }
  render() {
    return (
      <div>
        <div id="welcome" className="welcome position-relative">
          <Header />
          <div className="position-absolute kotak-pojok text-center">
            <h2 className="font-weight-bold">Sebuah Kegiatan</h2>
            <h6 className="font-weight-normal">
              Untuk mengenal kami,
              <br />
              Dinus Open Source Comunity
            </h6>
          </div>
        </div>
        <Activity data={this.state.act} />
        <div id="info" className="jadwal">
          <Container className="text-center">
            <h1>Biaya Kontribusi</h1>
            <h1 className="display-1 font-weight-bold">60K</h1>
            <Row className="p-md-5">
              {this.state.detail.map(datum => {
                return (
                  <Col sm={12} className="mt-md-3">
                    <Row>
                      {datum.map(data => {
                        return (
                          <Col sm={6}>
                            <Container>
                              <FontAwesomeIcon icon={data.icon} size="4x" />
                              <h2 className="font-weight-bold">{data.title}</h2>
                              <p className="m-0">{data.description1}</p>
                              <p>{data.description2}</p>
                            </Container>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <BootcampForm />
        <div id="contact" className="p-md-5 kontak">
          <Container>
            <Row>
              <Col sm={4} className="text-right">
                <div className="text-center kontak-person my-md-3">
                  <img
                    src="https://image.ibb.co/fXvhPz/kontak.png"
                    alt=""
                    className="mb-md-3"
                    style={{width: '40%'}}
                  />
                  <h3>Bayu Grafit</h3>
                  <p>
                    <small>0823-2259-7622</small>
                  </p>
                  <p>
                    <small>Telegram: @Grafiters</small>
                  </p>
                </div>
              </Col>
              <Col sm={4} className="text-center my-auto">
                <h1>Kontak</h1>
                <p>Untuk keterangan lebih lanjut</p>
              </Col>
              <Col sm={4} className="text-left">
                <div className="text-center kontak-person my-md-3">
                  <img
                    src="https://image.ibb.co/fXvhPz/kontak.png"
                    alt=""
                    className="mb-md-3"
                    style={{width: '40%'}}
                  />
                  <h3>Ilham Haqqi</h3>
                  <p>
                    <small>0858-4238-8767</small>
                  </p>
                  <p>
                    <small>Telegram: @ahmadhaqqer</small>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer p-md-5">
          <Container className="text-center">
            <Row>
              <Col sm={4}>
                <FontAwesomeIcon icon="envelope" size="lg" />
                <h5>sekretariat@gmail.com</h5>
              </Col>
              <Col sm={4}>
                <FontAwesomeIcon icon="globe-asia" size="lg" color="white" />
                <h5>www.doscom.org</h5>
              </Col>
              <Col sm={4}>
                <a
                  href="https://www.facebook.com/groups/doscomedia/"
                  target="_blank"
                  className="mr-md-3">
                  <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
                </a>
                <a
                  href="https://twitter.com/doscomedia?lang=en"
                  target="_blank"
                  className="mr-md-3">
                  <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                </a>
                <a
                  href="https://www.instagram.com/doscomedia/?hl=en"
                  target="_blank"
                  className="mr-md-3">
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
