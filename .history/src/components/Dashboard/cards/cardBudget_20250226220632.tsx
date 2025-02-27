import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react/dist/ssr/ArrowDown';
import { ArrowUp as ArrowUpIcon } from '@phosphor-icons/react/dist/ssr/ArrowUp';

import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar';
import { ListBullets as ListBulletsIcon } from '@phosphor-icons/react/dist/ssr/ListBullets';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { Receipt as ReceiptIcon } from '@phosphor-icons/react/dist/ssr/Receipt';



export interface BudgetProps {
  tittle: string;
  diff?: number;
  trend: 'up' | 'down';
  sx?: SxProps;
  value: string;
  imgAvatar: string;
}

const iconMap: Record<string, { icon: React.ElementType; color: string }> = {
  CurrencyDollar: { icon: CurrencyDollarIcon, color: '#1976d2' }, // Azul
  ListBullets: { icon: ListBulletsIcon, color: '#388e3c' }, // Verde
  Users: { icon: UsersIcon, color: '#d32f2f' }, // Vermelho
  Receipt: { icon: ReceiptIcon, color: '#fbc02d' }, // Amarelo
};

const getAvatarIcon = (imgAvatar: string) => {
  return iconMap[imgAvatar]; // Ícone padrão caso não corresponda
};

export function CardBudget({ tittle, diff, trend, sx, value, imgAvatar }: BudgetProps): React.JSX.Element {
  const TrendIcon = trend === 'up' ? ArrowUpIcon : ArrowDownIcon;
  const trendColor = trend === 'up' ? '#2e7d32' : '#d32f2f';
  const IconComponent = getAvatarIcon(imgAvatar);

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                {tittle}
              </Typography>
              <Typography variant="h4">{value}</Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: '#1976d2', height: '56px', width: '56px' }}>
              <IconComponent fontSize="1.5rem" />
            </Avatar>
          </Stack>
          {diff ? (
            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center' }} direction="row" spacing={0.5}>
                <TrendIcon color={trendColor} fontSize="24px" />
                <Typography color={trendColor} variant="body2">
                  {diff}%
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                Since last month
              </Typography>
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
