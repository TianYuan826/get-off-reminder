"use client";

import { useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import ExamInfoContent from "@/components/demo/exam-info";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { DropdownCheckbox } from "@/components/dropdown-checkbox";

// 入試情報のページ

const UNIVERSITY_TYPES = [
  { value: "1", label: "国立大学" },
  { value: "2", label: "私立大学" },
  { value: "3", label: "公立大学" },
];

const AREAS = [
  { value: "1", label: "関東" },
  { value: "5", label: "関西" },
  { value: "4", label: "東北" },
  { value: "2", label: "北海道" },
  { value: "3", label: "九州" },
];

export default function ExamInfoPage() {
  const [selectedUniversityType, setSelectedUniversityType] = useState("1");
  const [selectedAreas, setSelectedAreas] = useState<string[]>(["1"]);

  // 处理多选复选框的变更
  const handleAreaChange = (value: string) => {
    setSelectedAreas((prev) =>
      prev.includes(value)
        ? prev.filter((area) => area !== value)
        : [...prev, value]
    );
  };

  return (
    <ContentLayout>
      {/* 单选：选择大学类型 */}
      <Select
        value={selectedUniversityType}
        onValueChange={setSelectedUniversityType}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="University Type" />
        </SelectTrigger>
        <SelectContent>
          {UNIVERSITY_TYPES.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* 多选：选择地区 */}
      <DropdownCheckbox
        value={selectedAreas}
        onChange={setSelectedAreas}
        options={AREAS}
        placeholder="エリアを選択する"
      />

      {/* 内容区域 */}
      <ExamInfoContent />
    </ContentLayout>
  );
}
