import React from 'react'

import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';
import { TasksProgress } from '@/components/Dashboard/cards/tasks-progress';
import { CardBudget } from '@/components/Dashboard/cards/cardBudget';


export const metadata = { title: `Overview | Dashboard ` } satisfies Metadata;

export default function Home () {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <CardBudget tittle="Budget" imgAvatar= "CurrencyDollar" diff={12} trend="down" sx={{ height: '100%', borderRadius: 3 }} value="$24k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <CardBudget tittle="Total Customers" imgAvatar= "UsersIcon" diff={16} trend="down" sx={{ height: '100%', borderRadius: 3 }} value="1.6k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TasksProgress  sx={{ height: '100%', borderRadius: 3 }} value={75.5} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <CardBudget tittle="Total Profit" imgAvatar= "UsersIcon" diff={12} trend="down" sx={{ height: '100%', borderRadius: 3 }} value="$15k" />
      </Grid>
    </Grid>  
  )
}
