import Link from 'next/link';

import { siteConfig, socialLinkConfig } from '@/config';

import { Layout } from '@/components/Layout';

import { NavItem } from '@/models';

import { ListItem } from '../List/components/ListItem/ListItem';
import { List } from '../List/List';
import { Logo } from '../Logo';
import { SocialMedia } from '../SocialMedia';
import * as S from './styles';

type FooterProps = {
  items: NavItem[];
};

export const Footer = ({ items }: FooterProps) => {
  const fullYear = new Date().getFullYear();
  return (
    <Layout>
      <S.Container>
        <S.Content>
          <S.Section role="contentinfo">
            <Logo />
            <p>{siteConfig.title}</p>
          </S.Section>

          <S.Section role="contentinfo">
            <S.Title>Redes</S.Title>
            <SocialMedia items={socialLinkConfig.mainNav} />
          </S.Section>

          <S.Section>
            <S.Title>Sitemap</S.Title>

            <List className="flex-col">
              {items.map((item) => (
                <ListItem key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </ListItem>
              ))}
            </List>
          </S.Section>
        </S.Content>

        <S.CopyrightContainer>
          <S.Copyright>
            Todos os direitos reseverdos © Junior Alves {fullYear}
          </S.Copyright>
        </S.CopyrightContainer>
      </S.Container>
    </Layout>
  );
};
