
import Link from 'next/link'
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { Inter } from '@next/font/google'
import styles from './assets/styles/home.module.less';

const inter = Inter({ subsets: ['latin'] });

const introduceList = [
  {
    key: 1,
    src: require('./assets/images/s4.png'),
    title: '理性',
    des: '在复杂中，用理性的思考方式，寻求秩序与美',
  },
  {
    key: 2,
    src: require('./assets/images/s3.png'),
    title: '一致',
    des: '在跨平台上实现多端融合，从功能、用户体验、设计风格等多方面实现一致性',
  },
  {
    key: 3,
    src: require('./assets/images/s2.png'),
    title: '高效',
    des: '通过模块化的方式简化设计与开发流程，做到资源可复用',
  },
  {
    key: 4,
    src: require('./assets/images/s1.png'),
    title: '生长',
    des: '伴随系统生长迭代，作为核心能力为企业赋能，随着企业发展稳健上升',
  },
];



const Home = () => {
  // const FormatToTree = (arr: any, parentId: any) => {
  //   return arr.filter((item: any) => item.id === parentId).map((i: any) => {
  //      i.children = FormatToTree(arr || [], i.id);
  //      return i;
  //   })
  // };

  // const flatArr = (arr: any[], pre: any[]): any => {
  //   return arr.reduce((previous, current) => {
  //     if (Array.isArray(current)) {
  //       return flatArr(current, previous)
  //     } else {
  //       return previous.concat(current);
  //     }
  //   }, pre);
  // };


  // console.log('----', flatArr([1, [2, 3, 5, [5, [6, 7]], [8]]], []));
  return (
    <div className={styles["home"]}>
      <div className={styles["banner"]}>
        <Image className={styles["banner-bg"]} src={require('./assets/images/背景.png')} alt="banner-bg" />
        <div className={styles["banner-containter"]}>
          <div className={styles["banner-right"]}>
            <div className={styles["banner-des1"]}>Uni Design 2022</div>
            <div className={styles["banner-des2"]}>联通设计系统</div>
            <div style={{ marginTop: 22 }} className={styles["banner-des3"]}>先进的企业级数字化协同设计资产</div>
            <div className={styles["banner-des3"]}>高效愉悦的设计开发体验</div>
            <div className={styles["banner-des4"]}>6.30 - 全新发布图表库、Vue2.0</div>
          </div>
          <Image alt="" src={require('./assets/images/配图.png')} width={784} className={styles["banner-animation"]} />
          <Image
            alt=""
            src={require('./assets/images/文档板块.png')}
            width={179}
            className={styles["banner-file"]}
          />
          <Image
            alt=""
            src={require('./assets/images/折线图.png')}
            width={114}
            className={styles["banner-line"]}
          />
          <Image
            alt=""
            src={require('./assets/images/中间板块.png')}
            width={354}
            className={styles["banner-middle"]}
          />
          <Image
            alt=""
            src={require('./assets/images/前面板块.png')}
            width={208}
            className={styles["banner-front"]}
          />
          <Image alt="" src={require('./assets/images/圆环1.svg')} className={styles["round"]} />
          <div className={styles["banner-footer"]}>
            <div className={styles["footer-containter"]}>
              <div style={{ position: 'relative' }}>
                <div className={styles["current-header"]}>
                  <div>
                    <div className={styles["title1"]}>中后台</div>
                    <div className={styles["title2"]}>Vue2.0</div>
                  </div>
                  <Image src={require('./assets/images/vue.png')} alt="img" />
                  <Image className={styles["new"]} src={require('./assets/images/new.png')} alt="img" width={58} />
                </div>
                <div className={styles["current-footer"]}>
                  <div>预览</div>
                  <div>使用文档</div>
                </div>
              </div>
              <div>
                <div className={styles["current-header"]}>
                  <div>
                    <div className={styles["title1"]}>中后台</div>
                    <div className={styles["title2"]}>React</div>
                  </div>
                  <Image src={require('./assets/images/react.png')} alt="img" />
                </div>
                <div className={styles["current-footer"]}>
                  <div>预览</div>
                  <div>使用文档</div>
                </div>
              </div>
              <div>
                <div className={styles["current-header"]}>
                  <div>
                    <div className={styles["title1"]}>中后台</div>
                    <div className={styles["title2"]}>移动端</div>
                  </div>
                  <Image src={require('./assets/images/h5.png')} alt="" />
                </div>
                <div className={styles["current-footer"]}>
                  <div>预览</div>
                  <div>使用文档</div>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div className={styles["current-header"]}>
                  <div>
                    <div className={styles["title1"]}>中后台</div>
                    <div className={styles["title2"]}>图表库</div>
                  </div>
                  <Image src={require('./assets/images/charts.png')} alt="" />
                  <Image className={styles["new"]} src={require('./assets/images/new.png')} alt="img" width={58} />
                </div>
                <div className={styles["current-footer"]}>
                  <div>预览</div>
                  <div>使用文档</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["section"]}>
        <div className={styles["intruduce"]}>
          {(introduceList || []).map((item: any) => (
            <div className={styles["current-intruduce"]} key={item.key}>
              <Image src={item.src} alt="1" />
              <div className={styles["current-title"]}>{item.title}</div>
              <div className={styles["current-des"]}>{item.des}</div>
            </div>
          ))}
        </div>
        <div className={styles["video"]}>
          <div className={styles["current-video"]}>
            <div className={styles["current-left"]}>
              <div className={styles["left-title"]}>Web端组件库</div>
              <div className={styles["left-line"]} />
              <div className={styles["left-des"]}>
                <div>Uni Design在2021年的第一周，全新发布UniD管理域web端系统规范设计文档。</div>
                <div style={{ marginTop: '12px' }}>作为企业数字化设计的倡导者，UniD打破传统行业B端设计的固有思维模式，积极研发集产品、UIUX、前端开发于一体的数字化设计体系，让产品更专注于业务，让企业用户获得更快更流畅的系统使用体验，助力联通管理域系统快速数字化转型。</div>
              </div>
              <div className={styles["left-details"]}>
                查看详情
                {/* <Icon
                  type="right"
                  style={{
                    verticalAlign: 'middle', fontSize: '16px', marginLeft: '12px', marginTop: '-1px',
                  }}
                /> */}
              </div>
            </div>
            {/* <VideoPage
              videoId="video2"
              poster={require('./images/v1.png')}
              videoSrc={`${archive.url}/videos/pc.mp4`}
              imgSrc={require('./images/video-bg1.png')}
            /> */}
          </div>
          <div className={styles["current-video"]} style={{ marginTop: '88px' }}>
            <div className={styles["current-left"]}>
              <div className={styles["left-title"]}>移动端组件库</div>
              <div className={styles["left-line"]} />
              <div className={styles["left-des"]}>
                Uni Design设计团队本次隆重推出的移动端组件库均由企业内部移动端门户“随沃行”所用到的组件提炼而来。
                <div style={{ marginTop: '10px' }}>当内部系统服务于全企业用户时，UIUX设计品质会是最先触达到用户的，设计品质将成为产品的差异化竞争力。</div>
                <div style={{ marginTop: '10px' }}>Uni Design设计团队，希望通过细腻的交互体验、丰富的界面细节，改变企业现有移动端简单枯燥的设计现状，赋予移动端 生长、舒适、低密度 的移动端视觉设计原则。</div>
              </div>
              <div className={styles["left-details"]}>
                查看详情
                {/* <Icon
                  type="right"
                  style={{
                    verticalAlign: 'middle', fontSize: '16px', marginLeft: '12px', marginTop: '-1px',
                  }}
                /> */}
              </div>
            </div>
            {/* <VideoPage
              videoId="video1"
              poster={require('./images/v2.png')}
              videoSrc={`${archive.url}/videos/h5.mp4`}
              imgSrc={require('./images/video-bg2.png')}
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home; 
