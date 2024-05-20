import {Box} from "@mui/material";
import { ResponsiveChoropleth } from '@nivo/geo'
import {useColors} from "../common/theme/hooks/useMode.ts";
import {geoFeatures} from "../data/mockGeoFeatures.ts";
import {mockGeographyData} from "../data/mockData.ts";

interface Props {
    isDashboard: boolean
    size: number
}

function GeoChart({isDashboard, size}: Props) {
    const colors = useColors()
    return <>
        {/*<Header title={'Geo Chart'} subtitle={'Discover Geo Chart'}/>*/}
        <Box height={`${size}vh`}>
            <ResponsiveChoropleth
                theme={{
                    legends: {
                        text: {
                            fill: colors.grey[100]
                        }
                    },
                    axis: {
                        legend: {
                            text: {
                                fill: colors.grey[100]
                            }
                        }
                    },
                    text: {
                        fill: colors.grey[100]
                    },

                    tooltip: {
                        container: {
                            background: colors.grey[700],
                        }
                    }
                }}
                data={mockGeographyData}
                features={geoFeatures.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                domain={[ 0, 1000000 ]}
                unknownColor={colors.grey[300]}
                label="properties.name"
                valueFormat=".2s"
                isInteractive={true}
                projectionTranslation={[ 0.5, 0.5 ]}
                projectionRotation={[ 0, 0, 0 ]}
                projectionScale={isDashboard ? 40 : 150}
                enableGraticule={false}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                legends={ !isDashboard ? [
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -100,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: colors.grey[100],
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: colors.grey[300],
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ] : undefined}
            />
        </Box>

    </>
}

export default GeoChart;