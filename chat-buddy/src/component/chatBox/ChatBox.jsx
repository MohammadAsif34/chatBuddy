import React from "react";
import styles from "./ChatBox.module.css";

const ChatBox = () => {
  return (
    <>
      <div className={styles.ChatBoxDiv}>
        <div className={styles.ChatBoxHead}>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src="/chatBuddy/avatar2.png" alt="" />
            </div>
            <p>name</p>
          </div>
          <div className={styles.call_search}>
            <div className={styles.call}>
              <span className="bi bi-camera-video"></span>
              <span className="bi bi-telephone"></span>
            </div>
            <span className="bi bi-search"></span>
          </div>
        </div>

        <div className={styles.ChatBoxBody}>
          <div className={styles.Chats}>
            <div className={styles.chat1stPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 1 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quidem quas sapiente voluptate quaerat voluptatem,
                  minus, numquam commodi magni totam corrupti veritatis aliquam?
                  Corporis ullam repellat eveniet necessitatibus exercitationem
                  explicabo tenetur!
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat1stPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 1</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check2"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check2-all"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check2-circle color-read"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat1stPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 1</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>

            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat1stPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 1 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quidem quas sapiente voluptate quaerat voluptatem,
                  minus, numquam commodi magni totam corrupti veritatis aliquam?
                  Corporis ullam repellat eveniet necessitatibus exercitationem
                  explicabo tenetur!
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat1stPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 1</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check2"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check2-all"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check2-circle color-read"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat1stPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 1</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>

            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat1stPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 1 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quidem quas sapiente voluptate quaerat voluptatem,
                  minus, numquam commodi magni totam corrupti veritatis aliquam?
                  Corporis ullam repellat eveniet necessitatibus exercitationem
                  explicabo tenetur!
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat1stPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 1</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check2"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check2-all"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check2-circle color-read"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat1stPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 1</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>

            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>message 2</p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
            <div className={styles.chat2ndPerson}>
              <div className={styles.mssgDiv}>
                <p className={styles.mssg}>
                  message 2 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nisi quos ab error, porro eos pariatur dignissimos
                  similique nobis praesentium vel! Consequatur, nam eos fugit
                  porro harum adipisci maiores alias optio.
                </p>
                <span className={styles.time}>
                  00:00 am <i className="bi bi-check"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ChatBoxBottom}>
          <span
            className="bi bi-emoji-smile"
            title="Emojis, GIFs, Stickers"
          ></span>
          <span className="bi bi-paperclip" title="Attach"></span>
          <input type="text" name="" id="" placeholder="Type a Message" />
          <span className="bi bi-send" title="Record Voice Message"></span>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
