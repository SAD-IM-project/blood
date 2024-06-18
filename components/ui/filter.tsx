"use client"
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import Select, { MultiValue, ActionMeta, GroupBase } from 'react-select';
import { useRouter, useSearchParams } from "next/navigation"
import queryString from "query-string"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

// 定義選項類型
interface Option {
    value: string;
    label: string;
}

export function Filter({
    className,
}: React.HTMLAttributes<HTMLDivElement>) {
    const [date, setDate] = React.useState<DateRange | undefined>(undefined)
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
    const [selectedBloodTypes, setSelectedBloodTypes] = React.useState<MultiValue<Option>>([]);
    const [selectedRegions, setSelectedRegions] = React.useState<MultiValue<Option>>([]);
    const [selectedDiseases, setSelectedDiseases] = React.useState<MultiValue<Option>>([]);
    const [priceRange, setPriceRange] = React.useState<{ start: string, end: string }>({ start: '', end: '' });
    const [quotaRange, setQuotaRange] = React.useState<{ start: string, end: string }>({ start: '', end: '' });

    const bloodTypeOptions = [
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'AB', label: 'AB' },
        { value: 'O', label: 'O' }
    ];

    const regionOptions = [
        { value: 'north', label: 'North' },
        { value: 'south', label: 'South' },
        { value: 'east', label: 'East' },
        { value: 'west', label: 'West' }
    ];

    const diseaseOptions = [
        { value: 'diabetes', label: 'Diabetes' },
        { value: 'hypertension', label: 'Hypertension' },
        { value: 'cancer', label: 'Cancer' },
        // Add more options as needed
    ];

    const router = useRouter()
    const searchParams = useSearchParams();
    
    const handleApply = () => {
        setIsPopoverOpen(false)
        const currentQuery = queryString.parse(searchParams.toString());
        const query = {
            ...currentQuery,
            bloodTypes: selectedBloodTypes.map(bt => bt.value).join(','),
            regions: selectedRegions.map(region => region.value).join(','),
            diseases: selectedDiseases.map(disease => disease.value).join(','),
            priceRange: priceRange.start && priceRange.end ? `${priceRange.start}-${priceRange.end}` : undefined,
            quotaRange: quotaRange.start && quotaRange.end ? `${quotaRange.start}-${quotaRange.end}` : undefined
        }
        const queryStringified = queryString.stringify(query, { skipNull: true, skipEmptyString: true })
        router.push(`?${queryStringified}`)
    }

    const handleReset = () => {
        setIsPopoverOpen(false)
        setSelectedBloodTypes([])
        setSelectedRegions([])
        setSelectedDiseases([])
        setPriceRange({ start: '', end: '' })
        setQuotaRange({ start: '', end: '' })
        router.push('?')
    }

    return (
        <div className={cn("grid gap-2", className)}>
            <span>Blood Type:</span>
            <Select
                options={bloodTypeOptions}
                isMulti
                className="w-[300px] text-black"
                placeholder="Select blood type..."
                value={selectedBloodTypes}
                onChange={setSelectedBloodTypes}
                id="bloodType"
            />
            <span>Region:</span>
            <Select
                options={regionOptions}
                isMulti
                className="w-[300px] text-black"
                placeholder="Select region..."
                value={selectedRegions}
                onChange={setSelectedRegions}
                id="region"
            />
            <span>Disease:</span>
            <Select
                options={diseaseOptions}
                isMulti
                className="w-[300px] text-black"
                placeholder="Select disease..."
                value={selectedDiseases}
                onChange={setSelectedDiseases}
                id="disease"
            />
            <span>Price Range:</span>
            <div className="flex gap-2">
                <input
                    type="number"
                    className="w-[140px] p-2 border rounded text-black"
                    placeholder="From"
                    value={priceRange.start}
                    onChange={e => setPriceRange({ ...priceRange, start: e.target.value })}
                />
                <input
                    type="number"
                    className="w-[140px] p-2 border rounded text-black"
                    placeholder="To"
                    value={priceRange.end}
                    onChange={e => setPriceRange({ ...priceRange, end: e.target.value })}
                />
            </div>
            <span>Quota Number:</span>
            <div className="flex gap-2">
                <input
                    type="number"
                    className="w-[140px] p-2 border rounded text-black"
                    placeholder="From"
                    value={quotaRange.start}
                    onChange={e => setQuotaRange({ ...quotaRange, start: e.target.value })}
                />
                <input
                    type="number"
                    className="w-[140px] p-2 border rounded text-black"
                    placeholder="To"
                    value={quotaRange.end}
                    onChange={e => setQuotaRange({ ...quotaRange, end: e.target.value })}
                />
            </div>
            <div className="flex justify-end gap-2 p-5">
                <Button onClick={handleReset} variant="secondary">Reset</Button>
                <Button onClick={handleApply}>Apply</Button>
            </div>
        </div>
    )
}
