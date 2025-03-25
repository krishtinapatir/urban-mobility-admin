import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Truck, DollarSign, Leaf, TrendingUp, TrendingDown, Bike, Car, BarChart3, PieChart, IndianRupee } from "lucide-react"
import { AdminMap } from "@/components/admin/map"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { ParcelChart } from "@/components/admin/parcel-chart"
import { RecentOrders } from "@/components/admin/recent-orders"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Tabs defaultValue="overview" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Tabs defaultValue="overview">
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +12.5%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +8.2%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Kilometers</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,543 km</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500 flex items-center">
                    <TrendingDown className="mr-1 h-3 w-3" />
                    -3.1%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eco Tokens</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,456</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +18.7%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <RevenueChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Parcels Delivered</CardTitle>
              </CardHeader>
              <CardContent>
                <ParcelChart />
              </CardContent>
            </Card>
          </div>


          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Delivery Performance</CardTitle>
                  <CardDescription>On-time delivery rate</CardDescription>
                </div>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[300px]">
                  <div className="relative flex items-center justify-center">
                    <svg className="w-32 h-32">
                      <circle
                        className="text-muted stroke-current"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                      <circle
                        className="text-primary stroke-current"
                        strokeWidth="10"
                        strokeDasharray="352"
                        strokeDashoffset="35.2"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-3xl font-bold">90%</div>
                      <div className="text-xs text-muted-foreground">On-time</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex flex-col items-center">
                    <div className="text-xl font-bold">95%</div>
                    <div className="text-xs text-muted-foreground">Urban Areas</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xl font-bold">85%</div>
                    <div className="text-xs text-muted-foreground">Rural Areas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Vehicle Utilization</CardTitle>
                  <CardDescription>Fleet efficiency metrics</CardDescription>
                </div>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Truck className="mr-2 h-4 w-4" />
                        <span>Trucks</span>
                      </div>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4" />
                        <span>Vans</span>
                      </div>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Bike className="mr-2 h-4 w-4" />
                        <span>Motorcycles</span>
                      </div>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest 5 orders in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentOrders />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Live Vehicle Tracking</CardTitle>
                <CardDescription>Current active vehicles on the road</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <AdminMap />
              </CardContent>
            </Card>
          </div> */}
        </TabsContent>
        <TabsContent value="analytics">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Analytics Content</h2>
            <p>Analytics dashboard content will appear here.</p>
          </div>
        </TabsContent>
        <TabsContent value="reports">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Reports Content</h2>
            <p>Reports dashboard content will appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

