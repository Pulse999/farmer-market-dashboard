import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ListingsChart from "@/components/dashboard/listings-chart";
import OrderStatusChart from "@/components/dashboard/order-status-chart";
import RecentOrders from "@/components/dashboard/recent-orders";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Overview</h1>

        <p className="mt-2 text-muted-foreground">
          Welcome to the Farmer Marketplace dashboard.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Listings
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-bold">248</div>

            <p className="mt-1 text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Farmers
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-bold">86</div>

            <p className="mt-1 text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Orders
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-bold">1,284</div>

            <p className="mt-1 text-xs text-muted-foreground">
              +18% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Revenue
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-bold">R128,450</div>

            <p className="mt-1 text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Listings by Category</CardTitle>
          </CardHeader>

          <CardContent>
            <ListingsChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Status</CardTitle>
          </CardHeader>

          <CardContent>
            <OrderStatusChart />
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
<Card>
  <CardHeader>
    <CardTitle>Recent Orders</CardTitle>
  </CardHeader>

  <CardContent>
    <RecentOrders />
  </CardContent>
</Card>
    </div>
  );
}
