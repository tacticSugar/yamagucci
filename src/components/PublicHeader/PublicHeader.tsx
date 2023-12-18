import {
  IconArrowDown,
  IconLocation,
  IconGiftBox,
  IconGlare,
  IconSearch,
  IconWhatsApp,
  IconPhone,
  IconHeart,
  IconCart,
  IconRoundMan,
  IconThreeLanes,
  IconLoupeStripes,
} from "@/src/constants/icons";
import Link from "next/link";
import styles from "./PublicHeader.module.scss";
import cn from "classnames";
import IconWrapper from "../atoms/IconWrapper/IconWrapper";
import HeaderLogo from "../atoms/HeaderLogo/HeaderLogo";
import ButtonIcon from "../atoms/ButtonIcon/ButtonIcon";

function PublicHeader() {


  return (
    <header className={styles.publicHeader}>
      <div className={styles.publicHeader__navigationBox}>
        <nav className={styles.publicHeader__navigation}>
          <div className={styles.publicHeader__yourCityBox}>
            <IconWrapper
              IconComponent={IconLocation}
              iconClassname={styles.publicHeader__arrow}
            />
            <p className={styles.publicHeader__yourCity}>Ваш город</p>
            <IconWrapper
              IconComponent={IconArrowDown}
              iconClassname={styles.publicHeader__arrow}
            />

            {/* <div className={styles.cityList}>
              <div className={styles.cityList__dropDown}>
                <input type="text" className={} />
              </div>
            </div> */}
          </div>

          <ul className={styles.publicHeader__list}>
            <li>
              <Link href="/" className={styles.publicHeader__link}>
                Главная
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.publicHeader__link}>
                Главная
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.publicHeader__link}>
                Главная
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.publicHeader__link}>
                Главная
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.publicHeader__link}>
                Главная
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.publicHeader__link}>
                Главная
              </Link>
            </li>
            <li className={styles.publicHeader__moreBox}>
              <p className={styles.publicHeader__more}>Ещё</p>
              <IconWrapper
                IconComponent={IconArrowDown}
                iconClassname={styles.publicHeader__arrow}
              />
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.publicHeader__wrapper}>
        <div className={styles.publicHeader__btnsMob}>
        
          <ButtonIcon
            className={styles.publicHeader__btnDropDownMob}
            // iconWrapperClassName={styles.publicHeader__btnIconMob}
            icon={IconThreeLanes}
            withIcon={true}
            colorVariant="black"
            paddingVariant="wide"
          />

          <ButtonIcon
            className={styles.publicHeader__btnDropDownMob}
            // iconClassName={styles.publicHeader__btnIcon}
            icon={IconSearch}
            withIcon={true}
            colorVariant="black"
            paddingVariant="wide"
          />
        </div>

        <HeaderLogo
          srcImage={"/assets/logo-public-header.svg"}
          styleLogoImg={styles.publicHeader__logo}
        />

        <ButtonIcon
          className={cn(
            styles.publicHeader__catalog,
            styles.publicHeader__catalog_des
          )}
          colorVariant="red"
          label="Каталог"
          paddingVariant="wide"
          icon={IconThreeLanes}
          withIcon={true}
        />

        <div className={styles.publicHeader__searchBox}>
          <input
            type="text"
            className={styles.publicHeader__search}
            placeholder="Найди свой Ямагучи"
          />
          <IconWrapper
            IconComponent={IconSearch}
            wrapperClassname={styles.publicHeader__searchIconWrapper}
          />
        </div>

        <Link
          href="/"
          className={cn(
            styles.publicHeader__gifts,
            styles.publicHeader__gifts_des
          )}
        >
          <IconWrapper
            IconComponent={IconGiftBox}
            wrapperClassname={styles.publicHeader__giftBoxWrapper}
            iconClassname={styles.publicHeader__giftBox}
          />

          <IconWrapper
            IconComponent={IconGlare}
            wrapperClassname={cn(
              styles.publicHeader__IconGlareWrapper,
              styles.publicHeader__IconGlareWrapper_1
            )}
            iconClassname={cn(styles.publicHeader__IconGlare)}
          />

          <IconWrapper
            IconComponent={IconGlare}
            wrapperClassname={cn(
              styles.publicHeader__IconGlareWrapper,
              styles.publicHeader__IconGlareWrapper_2
            )}
            iconClassname={cn(styles.publicHeader__IconGlare)}
          />
          <p className={styles.publicHeader__giftsText}>Идеи подарков</p>
        </Link>

        <div className={styles.userPanel}>
          <button
            className={cn(
              styles.userPanel__btn,
              styles.userPanel__btn_whatsapp
            )}
          >
            <IconWrapper
              wrapperClassname={cn(
                styles.userPanel__iconWrapper,
                styles.userPanel__iconWrapper_whatsapp
              )}
              IconComponent={IconWhatsApp}
            />
          </button>

          <button className={cn(styles.userPanel__btn)}>
            <IconWrapper
              wrapperClassname={styles.userPanel__iconWrapper}
              IconComponent={IconPhone}
            />
          </button>

          {/* кнопка избранное  */}
          {/* 
          <button className={cn(styles.userPanel__btn)}>
            <IconWrapper
              wrapperClassname={styles.userPanel__iconWrapper}
              IconComponent={IconHeart}
            />
            <span className={cn(styles.userPanel__counter)}>0</span>
          </button> */}

          <button className={cn(styles.userPanel__btn)}>
            <IconWrapper
              wrapperClassname={styles.userPanel__iconWrapper}
              IconComponent={IconCart}
            />
            <span className={cn(styles.userPanel__counter)}>99</span>
          </button>

          {/* кнопка профиль */}
          {/* <button className={cn(styles.userPanel__btn)}>
            <span className={cn(styles.userPanel__name)}>Г</span>
          </button> */}

          {/* кнопка войти */}
          {/* <button className={cn(styles.userPanel__enter)}>
            <IconWrapper
              wrapperClassname={styles.userPanel__iconEnter}
              IconComponent={IconRoundMan}
            />
            Войти
          </button> */}
        </div>
      </div>

      <nav className={styles.publicHeader__mobileNav}>
        <ButtonIcon
          className={cn(styles.publicHeader__catalog)}
          colorVariant="red"
          label="Каталог"
          paddingVariant="wide"
          icon={IconLoupeStripes}
          withIcon={true}
        />

        <Link href="/" className={styles.publicHeader__popular}>
          <ButtonIcon
            className={styles.publicHeader__popularBtn}
            colorVariant="gray-matt-black"
            label="Популярное"
            paddingVariant="wide"
            withIcon={false}
          />
        </Link>

        <Link href="/" className={styles.publicHeader__gifts}>
          <IconWrapper
            IconComponent={IconGiftBox}
            wrapperClassname={styles.publicHeader__giftBoxWrapper}
            iconClassname={styles.publicHeader__giftBox}
          />

          <IconWrapper
            IconComponent={IconGlare}
            wrapperClassname={cn(
              styles.publicHeader__IconGlareWrapper,
              styles.publicHeader__IconGlareWrapper_1
            )}
            iconClassname={cn(styles.publicHeader__IconGlare)}
          />

          <IconWrapper
            IconComponent={IconGlare}
            wrapperClassname={cn(
              styles.publicHeader__IconGlareWrapper,
              styles.publicHeader__IconGlareWrapper_2
            )}
            iconClassname={cn(styles.publicHeader__IconGlare)}
          />
          <p className={styles.publicHeader__giftsText}>Идеи подарков</p>
        </Link>
      </nav>
    </header>
  );
}

export default PublicHeader;
